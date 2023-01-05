from fastapi import APIRouter, Depends, Response
from typing import Union,List
from queries.listings import Error, ListingIn, ListingOut, ListingQueries
router = APIRouter()

@router.get('/listings', response_model=Union[List[ListingOut], Error])
def get_listings(
    repo: ListingQueries = Depends(),
):
    return repo.get_listings()

@router.post('/listings', response_model=Union[ListingOut, Error])
def create_listing(listing: ListingIn, response:Response, repo: ListingQueries = Depends()):
    response.status_code = 400
    return repo.create(listing)

@router.put('/listings/{listing_id}', response_model=Union[Error, ListingOut])
def update_listing(listing_id:int, listing:ListingIn, repo:ListingQueries=Depends(),) -> Union[Error, ListingQueries]:
    return repo.update(listing_id, listing)
