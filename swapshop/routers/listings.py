from fastapi import APIRouter, Depends, Response
from typing import Union,List, Optional
from queries.listings import Error, ListingIn, ListingOut, ListingQueries, CategoryIn, CategoryOut
from authenticator import authenticator
router = APIRouter()

@router.get('/listings', response_model=Union[List[ListingOut], Error])
def get_listings(
    repo: ListingQueries = Depends(),
):
    return repo.get_listings()

@router.get('/listings/{listing_id}', response_model=Optional[ListingOut])
def get_one(
    listing_id: int,
    response: Response,
    repo: ListingQueries = Depends(),
) -> ListingOut:
    listing = repo.get_one(listing_id)
    if listing is None:
        response.status_code = 404
    return listing

@router.post('/listings', response_model=Union[ListingOut, Error])
def create_listing(listing: ListingIn, response:Response, repo: ListingQueries = Depends(), account_data: dict = Depends(authenticator.get_current_account_data)):
    user_id=account_data["id"]
    return repo.create(listing, user_id)

@router.put('/listings/{listing_id}', response_model=Union[ListingOut, Error])
def update_listing(listing_id:int, listing:ListingIn, repo:ListingQueries=Depends(), account_data: dict = Depends(authenticator.get_current_account_data)) -> Union[Error, ListingQueries]:
    user_id=account_data["id"]
    return repo.update(listing_id, listing, user_id)

@router.put('/listings/sell/{listing_id}', response_model=Union[bool, Error])
def sell_listing(listing_id:int, repo:ListingQueries=Depends(), account_data: dict = Depends(authenticator.get_current_account_data)) -> Union[Error, ListingQueries]:
    user_id=account_data["id"]
    return repo.sell_listing(listing_id, user_id)

@router.delete('/listings/{listing_id}', response_model=bool)
def delete_listing(listing_id: int, repo: ListingQueries = Depends(), account_data: dict = Depends(authenticator.get_current_account_data)) -> bool:
    return repo.delete(listing_id)

@router.get('/listings/categories/{category_id}', response_model=Union[List[ListingOut],Error])
def get_listings_by_category(
    category_id: int,
    repo: ListingQueries = Depends(),):

    return repo.get_by_category(category_id)

@router.get('/listings/sellers/{seller_id}', response_model=Union[List[ListingOut],Error])
def get_listings_by_seller(
    seller_id: int,
    repo: ListingQueries = Depends(),):

    return repo.get_by_seller(seller_id)

@router.get("/categories", response_model=Union[List[CategoryOut], Error])
def get_categories(
    repo: ListingQueries = Depends(),
):
    return repo.get_categories()
