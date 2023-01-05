from pydantic import BaseModel
from typing import List, Optional, Union
#from datetime import date
from queries.pool import pool

class Error(BaseModel):
    message: str


class ListingIn(BaseModel):
    image_url: str
    name: str
    category: str
    condition: str
    price: float
    description: str


class ListingOut(BaseModel):
    id: int
    image_url: str
    name: str
    category: str
    condition: str
    price: float
    description: str


class ListingQueries:
    def get_one(self, listing_id: int) -> Optional[ListingOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , image_url
                            , name
                            , category
                            , condition
                            , price
                            , description
                        FROM listings
                        WHERE id = %s
                        """,
                        [
                            listing_id
                        ],
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
                            (image_url, name, category, condition, price, description)
                        VALUES
                            (%s, %s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            listing.image_url,
                            listing.name,
                            listing.category,
                            listing.condition,
                            listing.price,
                            listing.description
                        ]
                    )
                    id = result.fetchone()[0]
                    return self.listing_in_to_out(id, listing)
        except Exception:
            return {"message":"Create did not work"}

    def listing_in_to_out(self, id:int, listing:ListingIn):
        old_data = listing.dict()
        return ListingOut(id=id, **old_data)

    def record_to_listing_out(self, record):
        return ListingOut(
            id=record[0],
            image_url=record[1],
            name=record[2],
            category=record[3],
            condition=record[4],
            price=record[5],
            description=record[6]
        )











#  listing_id,
#                             listing_id.image_url,
#                             listing_id.name,
#                             listing_id.category,
