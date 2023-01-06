from pydantic import BaseModel
from .listings import ListingQueries
import os
from psycopg_pool import ConnectionPool


pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    email: str
    password: str
    first_name: str
    last_name: str


class AccountOut(BaseModel):
    id: str
    email: str
    first_name: str
    last_name: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountQueries(ListingQueries):
    #Region properties
    DB_NAME = "swapshop"
    COLLECTION = "accounts"

    def get_one(self, email: str) -> AccountOut:
        # connect the database
        with pool.connection() as conn:
            # get a cursor (something to run SQL with)
            with conn.cursor() as db:
                # Run our SELECT statement
                result = db.execute(
                    """
                    SELECT id
                            , email
                            , hashed_password
                            , first_name
                            , last_name
                    FROM accounts
                    WHERE email = %s;
                    """,
                    [email]
                )
                record = result.fetchone()
                if record is None:
                    return None
                return AccountOut(
                    id=record[0],
                    email=record[1],
                    hashed_password=record[2],
                    first_name=record[3],
                    last_name=record[4],
                )


    # def get(self, email : str) -> AccountOutWithPassword:
    #     props = self.collection.find_one({"email": email})
    #     if not props:
    #         return None
    #     props["id"] = str(props["_id"])
    #     return AccountOutWithPassword(**props)


    def create(self, account: AccountIn, hashed_password: str) -> AccountOutWithPassword:
        # connect the database
        with pool.connection() as conn:
            # get a cursor (something to run SQL with)
            with conn.cursor() as db:
                # run our SELECT statement
                result = db.execute(
                    """
                    INSERT INTO accounts (email, hashed_password, first_name, last_name)
                    VALUES(%s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [account.email, hashed_password, account.first_name, account.last_name]
                )
                id=result.fetchone()[0]
                return AccountOutWithPassword(
                    id=id,
                    email=account.email,
                    hashed_password=hashed_password,
                    first_name=account.first_name,
                    last_name=account.last_name,
                )


    # def create(self, info: AccountIn, hashed_password : str) -> AccountOutWithPassword:
    #     props = info.dict()
    #     props["password"] = hashed_password
    #     try:
    #         self.collection.insert_one(props)
    #     except DuplicateAccountError:
    #         raise DuplicateAccountError()
    #     props["id"] = str(props["_id"])
    #     return Account(**props)
