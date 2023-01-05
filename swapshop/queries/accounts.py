from pydantic import BaseModel
from .listings import ListingQueries


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    email:str
    password: str
    full_name: str


class AccountOut(BaseModel):
    id: str
    email: str
    full_name: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountQueries(ListingQueries):
    #Region properties
    DB_NAME = "swapshop"
    COLLECTION = "accounts"


    def get(self, email : str) -> AccountOutWithPassword:
        props = self.collection.find_one({"email": email})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return Account(**props)


    def create(self, info: AccountIn, hashed_password : str) -> AccountOutWithPassword:
        props = info.dict()
        props["password"] = hashed_password
        try:
            self.collection.insert_one(props)
        except DuplicateAccountError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return Account(**props)
