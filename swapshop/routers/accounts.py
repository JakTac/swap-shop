from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request
)
from jwtdown_fastapi.authentication import Token
from .authenticator import authenticator

from pydantic import BaseModel

from queries.accounts import (
    AccountIn,
    AccountOut,
    AccountQueries,
    DuplicateAccountError,
)
from queries.listings import ListingQueries


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str


router = APIRouter()

@router.get("swapshop/protected", response_model=bool)
async def get_protected():
    pass

@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


# @router.post("/swapshop/accounts", response_model=AccountToken | HttpError)
# async def create_account(
#     info: AccountIn,
#     request: Request,
#     response: Response,
#     accounts: AccountQueries = Depends(),
#     # repo?
# ):
#     hashed_password = authenticator.hash_password(info.password)
#     account = accounts.create(info, hashed_password)
#     form = AccountForm(username=info.email, password=info.password)
#     token = await authenticator.login(response, request, form, accounts)
#     return AccountToken(account=account, **token.dict())


@router.post("/swapshop/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends(),
):
    try:
        hashed_password = authenticator.hash_password(info.password)
    except Exception as e:
        print(e)
    try:
        account = accounts.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",

        )
    form = AccountForm(username=info.email, password=info.password)
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=account, **token.dict())

@router.get("/swapshop/listings", response_model=bool)
async def get_protected(
    listings:ListingQueries = Depends(),
    account_data: dict = Depends[authenticator.get_account_data],
):
    return listings.get_listings(account_data)
