from fastapi.testclient import TestClient
from queries.listings import ListingQueries
from main import app

repo = TestClient(app=app)


class ListingQueriesMock:
    def get_categories(self):
        return []


def test_get_categories():

    app.dependency_overrides[ListingQueries] = ListingQueriesMock

    res = repo.get("/categories")
    print(res.json())

    assert res.status_code == 200
    assert res.json() == []

    app.dependency_overrides = {}
