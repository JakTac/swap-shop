import React, { useEffect, useState } from "react";

function CreateListing(list) {
  const [listData, setListData] = useState({
    image_url: "",
    name: "",
    category_id: "",
    condition: "",
    price: "",
    description: "",
  });

  const [categories, setCategory] = useState([]);
  const loadCategories = async () => {
    const url = `${process.env.REACT_APP_swapshop_API_HOST}/categories/`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setCategory(data);
    } else {
      console.error("Error in fetching categories");
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...listData };
    const listUrl = `${process.env.REACT_APP_swapshop_API_HOST}/listings/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    const response = await fetch(listUrl, fetchConfig);
    console.log(response);
    if (response.ok) {
      console.log(response);
      const newListing = await response.json();
      setListData({
        image_url: "",
        name: "",
        category_id: "",
        condition: "",
        price: "",
        description: "",
      });
    } else {
      console.error("Error in creating listing");
    }
    console.log(listData);
  };

  return (
    <div className="auth-form-container">
      <div className="col-md-12 text-center">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <div className="col-md-12 text-center" style={{ color: "black" }}>
                <h1>List Item </h1>
              </div>
              <form onSubmit={handleSubmit}>
                <label style={{ color: "black" }} htmlFor="image_url">
                  image_url
                </label>
                <div className="form-floating mb-3">
                  <input
                    value={listData.image_url}
                    onChange={(event) =>
                      setListData({
                        ...listData,
                        image_url: event.target.value,
                      })
                    }
                    name="image_url"
                    id="image_url"
                    placeholder="Image Url"
                    className="form-control"
                  />
                </div>
                <label style={{ color: "black" }} htmlFor="name">
                  Name
                </label>
                <div className="form-floating mb-3">
                  <input
                    value={listData.name}
                    onChange={(event) =>
                      setListData({ ...listData, name: event.target.value })
                    }
                    name="name"
                    id="name"
                    placeholder="Name of item"
                    className="form-control"
                  />
                </div>
                <div className="form-floating mb-3">
                  <select
                    value={listData.category_id}
                    onChange={(event) =>
                      setListData({
                        ...listData,
                        category_id: event.target.value,
                      })
                    }
                    type="category_id"
                    placeholder="Select a category"
                    id="category_id"
                    name="category_id"
                    className="form-control"
                  >
                    <option value="">Choose a category</option>
                    {categories.map((category) => (
                      <option value={category.id} key={category.id}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-floating mb-3">
                  <select
                    value={listData.condition}
                    onChange={(event) =>
                      setListData({
                        ...listData,
                        condition: event.target.value,
                      })
                    }
                    placeholder="What is the condition"
                    required
                    id="condition"
                    name="condition"
                    className="form-control"
                  >
                    <option value="new" key="new">
                      New
                    </option>
                    <option value="used" key="used">
                      Used
                    </option>
                  </select>
                </div>
                <label style={{ color: "black" }} htmlFor="price">
                  Price
                </label>
                <div className="form-floating mb-3">
                  <input
                    value={listData.price}
                    onChange={(event) =>
                      setListData({
                        ...listData,
                        price: event.target.value,
                      })
                    }
                    placeholder="What is the price"
                    required
                    id="price"
                    name="price"
                    className="form-control"
                  />
                </div>
                <label style={{ color: "black" }} htmlFor="description">
                  Item Description
                </label>
                <div className="form-floating mb-3">
                  <input
                    value={listData.description}
                    onChange={(event) =>
                      setListData({
                        ...listData,
                        description: event.target.value,
                      })
                    }
                    placeholder="What is the description"
                    required
                    id="description"
                    name="description"
                    className="form-control"
                  />
                </div>
                <button className="btn btn-dark" type="submit">
                  List Now!
                </button>
              </form>
              &nbsp;&nbsp;&nbsp;
              <div>
                {/* <button type="button" className="btn btn-dark">
                  <NavLink
                    style={{ color: "white" }}
                    className="nav-link"
                    aria-current="page"
                    to="/login/"
                  >
                    Already have an account? Login here.
                  </NavLink>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateListing;
