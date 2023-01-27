from queries.listings import ListingQueries
from main import app
from fastapi.testclient import TestClient


client = TestClient(app=app)


class ListingQueriesMock:
    def get_listings(self):
        return []


def test_get_listings():

    app.dependency_overrides[ListingQueries] = ListingQueriesMock

    res = client.get("/listings")

    assert res.status_code == 200
    assert res.json() == []

    app.dependency_overrides = {}
