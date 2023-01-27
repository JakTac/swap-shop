# <center>**SwapShop**

<center>

# **Team**
---
**Melissa Michaud,**
**Jake Tippit,**
**Alonso Rodriguez,**
**Cody Torres,**
**Ben Demasso**
---

</center>


<br><br>


# <center>**Diagram of Architecture**

---

<br>

<p allign="center">
    <img src="https://i.imgur.com/GzK5mvc.png"/>
</p>
<br><br><br>

# <center>**swapshop api**
---

<br><br>

## **Models**

---
### **Listings Table** -- (used to create a listing)

>When creating a listing for the database the following properties are required: "listings_id" (this is automatically assigned a value once a listing is created), "name", "image_url", "category_id" (which is a foreign key of the Category Model), "condition", "price", "description", "seller_id"  and "sold".


| **TABLE FIELD** | **FIELD TYPE** | **OTHER ARGS**                             |
| :-------------: | :------------: | :----------------------------------------- |
| "listings_id"   |  `INT`         | `SERIAL PRIMARY KEY` <br> `(Not Null)`     |
|    "name"       |  `TEXT`        | `(Not Null)`                               |
|  "image_url"    |  `TEXT`        | `(Not Null)`                               |
| "category_id"   |  `INT`         | `Foreign Key` <br>`(Not Null)`             |
|  "condition"    |  `TEXT`        | `(Not Null)`                               |
|    "price"      |  `FLOAT`       | `(Not Null)`                               |
| "description"   |  `TEXT`        | `(Not Null)`                               |
|  "seller_id"    |  `INT`         | `(Not Null)`                               |
|    "sold"       |  `BOOL`        | `Default=False`<br>`(Not Null)`            |

<br><br>

### **Categories Table** -- (This table holds categories that are inserted into the database directly)

>When the following categories are directly added to the categories table: "Men", "Women" and "Jewelry"

| **TABLE FIELD** |     **ID**     |
| :-------------: | :------------: |
|     "Men"       |      `1`       | 
|    "Women"      |      `2`       |
|   "Jewelry"     |      `3`       |

<br><br>

### **Accounts Table** -- (Used to create an account)

>When creating a new account the following fields are required: "id" (this is automatically assigned a value once an account is created),"email", "hashed_password", "first_name", and "last_name"

| **MODEL FIELD** |       **FIELD TYPE**   | **OTHER ARGS**                             |
| :-------------: | :--------------------: | :----------------------------------------- |
|      "id"       |  `INT`                 | `SERIAL PRIMARY KEY` <br> `(Not Null)`     |
|     "email"     |  `VARCHAR`             | `max_length: 100 (Not Null)` <br> `unique` |
|"hashed_password"|  `TEXT`                | `(Not Null)`                               |
| "first_name"    |  `VARCHAR`             | `max_length: 100 (Not Null)`               |
| "last_name"     |  `VARCHAR`             | `max_length: 100 (Not Null)`               |


<br><br>


## **API Views**

---
<br>

### **Listings Views :**


| **REQUEST METHOD** |                     **FUNCTION**                |                     **ENDPOINT**                     |
| :----------------: | :---------------------------------------------: | :--------------------------------------------------: |
|       `GET`        |                   list listings                 | http://localhost:8000/listings/                      |
|       `POST`       |                  create listing                 | http://localhost:8000/listings/                      |
|       `GET`        |                   get listing                   | http://localhost:8000/listings/:listing_id/          |
|       `PUT`        |                  update listing                 | http://localhost:8000/listings/:listing_id/          |
|       `DELETE`     |                  delete listing                 | http://localhost:8000/listings/:listing_id/          |
|       `GET`        |            get listing via category             | http://localhost:8000/listings/:category_id/         |
|       `GET`        |             get listings of seller              | http://localhost:8000/listings/sellers/:seller_id/   |
|       `GET`        |                get categories                   | http://localhost:8000/categories/                    |
<br>

### **Accounts Views :**

| **REQUEST METHOD** |   **FUNCTION**         |              **ENDPOINT**                            |
| :----------------: | :--------------------: | :--------------------------------------------------: |
|       `GET`        | gets the token         | http://localhost:8080/api/token/                     |
|       `POST`       | create an account      | http://localhost:8080/swapshop/accounts/             |
|       `GET`        | lists accounts         | http://localhost:8080/swapshop/accounts/             |
|       `GET`        | gets an account via id | http://localhost:8080/swapshop/accounts/:account_id/ |
|       `DELETE`     | deletes an account     | http://localhost:8080/swapshop/accounts/:account_id/ |

<br>


# <center>**Key React Features**
---

### **Create an Account**

>This feature allows a user to create an account by inputting their name, email, and password. It then automatically logs them in

### **Log into an Account**

>This feature allows a user to log into an account by inputting their email and password. It will then log them in presuming the account exists.

### **Updating NavBar**

>When a user logs in the NavBar updates live to reflect the user being logged in.

### **Create a Listing**

>This feature allows a logged in user to create a listing by choose a category and inputting the name, an image, the condition, the price, and the description. Once it is created the listings seller_id will automatically be set to the user's id.

### **Home Page Carousel**

>The home page feautres a carousel that displays the different categories of the listings which also acts as a button that will take you to the page of that category.

### **Category Pages**

>These pages show all of the listings of a particular category. They feature a searchbar and all listings have the ability to be requested which will take them off of the page.

### **Filtering on Category Pages**

>The category pages will automatically be filtered to not show the users listing to them. It will also filter out listings that have been requested. It also features a search bar which will filter for listings that have the same name as what is being inputted. 

### **User Listings Page**

>This page displatys all of the users listings, and allows the user to mark a listing as sold.

### **User Requested Listings**

>This page shows all fo the user's listings that have been requested.


<br>

# **Getting the App Started**
---

1. Git clone into your local repository
    `git clone <<repo>>`
2. cd into it
    `cd project-swap-shop`
3. Create a volume and name it postgres-data
    `docker volume create postgres-data`
4. Build the image
    `docker compose build`
5. Run the containers
    `dokcer compose up`
6. Open browser to http://localhost:3000 to make sure it's running (it may take a minute or two)
7. Once it's up and running, you can begin inputting data. You can access everything via the dropdowns on the NavBar

## Inputting data through Swagger
---
### **Navigate to the following link**
>  http://localhost:8000/docs#/