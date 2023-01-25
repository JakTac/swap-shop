import json
from fastapi.testclient import TestClient
from queries.listings import ListingIn, ListingOut, ListingQueries
from routers.listings import ListingIn, ListingOut, ListingQueries
# Not sure about the routers import
from main import app


client = TestClient(app=app)

class ListingQueriesMock:

    def create_listing(self, listing: ListingIn) -> ListingOut:
        listing_dict = listing.dict()
        return ListingOut(id = 420, **listing_dict)

    def get_listings(self):
        return []

    def update_listing():
        pass

def test_create_listing():
    # Arrange

    # Act

    # Assert

    # A cleanup
    pass

def test_get_listings():
    # Arrange

    # Act

    # Assert

    # A cleanup
    pass

def test_update_listing():
    # Arrange

    # Act

    # Assert

    # A cleanup
    pass
