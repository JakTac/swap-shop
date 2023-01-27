from fastapi.testclient import TestClient
from queries.listings import ListingQueries
from authenticator import authenticator
from main import app

client = TestClient(app=app)


def get_current_mock_data():
    return {"id": 1, "username": "Cody"}


class ListingsQueriesMock:
    def delete(self, listing_id: int):
        return True


def test_delete_listings():
    app.dependency_overrides[ListingQueries] = ListingsQueriesMock
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = get_current_mock_data

    res = client.delete("/listings/1")
    assert res.status_code == 200
    assert res.json() is True

    app.dependency_overrides = {}
