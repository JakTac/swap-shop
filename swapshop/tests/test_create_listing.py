import json
from fastapi.testclient import TestClient
from routers.listings import ListingIn, ListingOut, ListingQueries
from main import app
from authenticator import authenticator


repo = TestClient(app=app)


def get_current_account_data_mock():
    return {
        "id": 69,
        "username": "bucky",
    }


class ListingQueriesMock:
    def create(self, listing: ListingIn, user_id: int) -> ListingOut:
        listing_dict = listing.dict()
        return ListingOut(
            listings_id=420, sold=False, seller_id=user_id, **listing_dict
        )

    def get_listings(self):
        return []


def test_create_listing():
    app.dependency_overrides[ListingQueries] = ListingQueriesMock
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = get_current_account_data_mock
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

    result = repo.post("/listings", json.dumps(listing_body))

    assert result.status_code == 200
    assert result.json()["seller_id"] == 69
    assert result.json()["listings_id"] == 420
    assert result.json()["sold"] is False


def test_get_listings():
    app.dependency_overrides[ListingQueries] = ListingQueriesMock

    result = repo.get("/listings")

    assert result.status_code == 200
    assert result.json() == []

    app.dependency_overrides = {}
