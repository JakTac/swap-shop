from pydantic import BaseModel
from typing import List, Optional, Union
#from datetime import date
from queries.pool import pool

class Error(BaseModel):
    message: str


class ListingIn(BaseModel):
    image_url: str
    name: str
    category_id: int
    condition: str
    price: float
    description: str


class ListingOut(BaseModel):
    listings_id: int
    image_url: str
    name: str
    category_id: int
    condition: str
    price: float
    description: str

class CategoryIn(BaseModel):
    category: str

class CategoryOut(BaseModel):
    id: int
    category: str

class ListingQueries:
    def get_one(self, listing_id: int) -> Optional[ListingOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT listings_id
                            , image_url
                            , name
                            , category_id
                            , condition
                            , price
                            , description
                        FROM listings
                        INNER JOIN categories
                        ON listings.category_id = categories.id
                        WHERE listings_id = %s
                        """,
                        [listing_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_listing_out(record)
        except Exception as e:
            print(e)
            return {'message':'Could not get that listing'}

    def create(self, listing: ListingIn) -> Union[ListingOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO listings
                            (image_url, name, category_id, condition, price, description)
                        VALUES
                            (%s, %s, %s, %s, %s, %s)
                        RETURNING listings_id;
                        """,
                        [
                            listing.image_url,
                            listing.name,
                            listing.category_id,
                            listing.condition,
                            listing.price,
                            listing.description
                        ]
                    )
                    listings_id = result.fetchone()[0]
                    return self.listing_in_to_out(listings_id, listing)
        except Exception:
            return {"message":"Create did not work"}

    def get_listings(self) -> Union[Error, List[ListingOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT listings_id
                            , image_url
                            , name
                            , category_id
                            , condition
                            , price
                            , description
                        FROM listings
                        INNER JOIN categories
                        ON listings.category_id = categories.id
                        """
                    )

                    return [self.record_to_listing_out(record)
                    for record in result
                    ]
        except Exception as e:
            print(e)
            return {'message':'Could not get all listings'}


    def delete(self, listing_id: int):
        try:
            with pool.connection()as conn:
                with conn.cursor()as db:
                    db.execute(
                        """
                        DELETE FROM listings
                        WHERE listings_id = %s
                        """,
                        [listing_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def update(self, listing_id: int, listing: ListingIn) -> Union[ListingOut, Error]:
        try:
            with pool.connection()as conn:
                with conn.cursor()as db:
                    db.execute(
                        """
                        UPDATE listings
                        SET image_url = %s
                            , name = %s
                            , category_id = %s
                            , condition = %s
                            , price = %s
                            , description = %s
                        WHERE listings_id = %s
                        """,
                        [
                            listing.image_url,
                            listing.name,
                            listing.category_id,
                            listing.condition,
                            listing.price,
                            listing.description,
                            listing_id
                        ]
                    )
                    return self.listing_in_to_out(listing_id, listing)
        except Exception as e:
            print(e)
            return {"message": "Could not update listing"}

    def get_by_category(self, category_id: int) -> Union[Error, List[ListingOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT listings_id
                            , image_url
                            , name
                            , category_id
                            , condition
                            , price
                            , description
                        FROM listings
                        INNER JOIN categories
                        ON listings.category_id = categories.id
                        WHERE categories.id = %s
                        """,
                        [category_id],
                    )

                    return [self.record_to_listing_out(record)
                    for record in result
                    ]
        except Exception as e:
            print(e)
            return {'message':'Could not get that listing'}






    def listing_in_to_out(self, listing_id:int, listing:ListingIn):
        old_data = listing.dict()
        return ListingOut(listings_id=listing_id, **old_data)

    def record_to_listing_out(self, record):
        return ListingOut(
            listings_id=record[0],
            image_url=record[1],
            name=record[2],
            category_id=record[3],
            condition=record[4],
            price=record[5],
            description=record[6]
        )












#  listing_id,
#                             listing_id.image_url,
#                             listing_id.name,
#                             listing_id.category,
