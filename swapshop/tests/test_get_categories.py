from fastapi.testclient import TestClient
from main import app

repo = TestClient(app=app)


def test_get_categories():
    res = repo.get("/categories")
    print(res.json())

    assert res.status_code == 200
    assert res.json() == [
        {"id": 1, "category": "Men"},
        {"id": 2, "category": "Women"},
        {"id": 3, "category": "Jewelry"},
    ]

    app.dependency_overrides = {}
