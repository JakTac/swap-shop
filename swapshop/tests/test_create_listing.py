import json
from fastapi.testclient import TestClient
from queries.listings import ListingIn, ListingOut, ListingQueries
from routers.listings import ListingIn, ListingOut, ListingQueries
# Not sure about the routers import
from main import app


repo = TestClient(app=app)

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
    app.dependency_overrides[ListingQueries] = ListingQueriesMock
    listing_body = {
        "image_url": "https://i.imgflip.com/1bmysm.jpg",
        "name": "Never Gonna Give You Up",
        "category_id": "2",
        "condition": "Brand New",
        "price": "500",
        "description": "Never Gonna Let You Down",
        "seller_id": "99",
        "sold": False,
    }

    # Act
    result = repo.post("/createlisting/", json.dumps(listing_body))

    # Assert
    assert result.status_code == 200
    assert 1 == 1

    # A cleanup
    pass

def test_get_listings():
    # Arrange
    app.dependency_overrides[ListingQueries] = ListingQueriesMock

    # Act
    result = repo.get("/mylistings/")

    # Assert
    assert result.status_code == 200
    assert result.json() == { "listings": [] }
    assert 1 == 1

    # A cleanup
    app.dependency_overrides = {}

def test_update_listing():
    # Arrange

    # Act

    # Assert

    # A cleanup
    pass
