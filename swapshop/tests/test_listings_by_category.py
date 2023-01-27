from fastapi.testclient import TestClient
from queries.listings import ListingQueries
from main import app

client = TestClient(app=app)


class ListingQueriesMock:
    def get_by_category(self, category_id: int):
        return []


def test_listings_by_category():
    app.dependency_overrides[ListingQueries] = ListingQueriesMock

    res = client.get("listings/categories/1")

    assert res.status_code == 200
    assert res.json() == []

    app.dependency_overrides = {}
