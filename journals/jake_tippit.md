-------------------------------------------------------------------------------------------------------------------------------------
## January 25, 2023
Today, we worked on:

* Unit Tests

Today we continued work on unit tests. Alonso and Melissa finished theirs last night so they were both able to help walk us through them. I was quite confused by them and went back to rewatch Riley's lecture on them. Afterwards Alonso helped me finish up the last little bit of it and helped clear my confusion on them. Overall a pretty productive day, and tomorrow we start deployment! 

-------------------------------------------------------------------------------------------------------------------------------------
## January 24, 2023
Today, we worked on:

* Small modifications to frontend and begun unit tests

Today I started us off by changing some of the verbage on our frontend based off of the input that we recieved from Riley. Afterwards Melissa worked on the styling of the mens and womens page to look more like the jewelry page. Afterwards she changed the footer of the site. Once we finished this we began work on our unit tests. Each of us has been assigned one unit test, but I think tomorrow we're going to meet up and get a solid base for working on these unit tests, cause as of right now everyone has been making their own folders and files.

-------------------------------------------------------------------------------------------------------------------------------------
## January 23, 2023
Today, we worked on:

*Sale history page and finishing touches of frontend

Today we started off with Ben wokring on the Sale History Page. It didn't take him long at all and once he got the skeleton of it working I took over for the filtering. I added a filter so that way only the user's listings that had been marked as sold would appear on the page. Afterwards I went through all of the listing pages and made it so the users listings wouldn't appear for them on the page and I added a buy button which would mark the listing as sold in the database. After I got this to work properly on all of the listing pages I went through our frontend and cleaned up the code removing anything that wasn't nesecary and I fixed small issues that were on the NavBar and the footer. Overall it was a very productive day. We talked with Riley who has reccomended we change some of the verbage on the frontend. Tomorrow we start on our unit tests.

-------------------------------------------------------------------------------------------------------------------------------------
## January 20, 2023
Today, we worked on:

*The Profile Page

Today we started working on the profile page. We got the cards working to display the listings, however we needed to properly filter through them. I took the lead on this and started working on the filtering functionality. I ended up writing a function for token.js that worked nearly identically to the getTokenInternal function. However, there were issues. I noticed that was getting sent from the function was the info we needed but it was stuck in a promise. We met with a SEIR who helped us work it out some. They informed us that we needed to run a fetch on the function to retreieve the info out of the promise. We then spent some time writing a very long function that ended up working! Afterwards, Alonso and I spent some time simplifying it to make it more legible. After the filtering was finished we spent some time stylizing the page.

-------------------------------------------------------------------------------------------------------------------------------------
## January 19, 2023
Today, we worked on:

*Create a listing, women's page, profile page

Today we continued work on the crate listing page. After updating our backend for the profile page and the sales history page we figured it would be best to have the create listing page up and running before tackling those pages. Cody was leading us on the create a listing page, and after some time struggling we got the create listing page up and running. He also finished work on the women's page! After we finished both of these we started work on the skeleton of the profile page.

-------------------------------------------------------------------------------------------------------------------------------------
## January 18, 2023
Today, we worked on:

*Updating Backend

Today we realized that we would need to update our backend in order to make the profile page and sale history page work properly. We started off by updating our listings to include a seller id and sold boolean. This way whenever we create a new listing it will autmoatically assign the user as the seller. However, this turned out to be more complicated than previously thought. We reached out to Riley for his assistance and he helped us update our create listings. We then started work on making a function that would update our listing's sold value from false to true. However, this was even more complicated than previously thought. We reached out to Riley again, and after quite a bit of struggling and help from Riley, we came to the conclusion that we would just need to rewrite our update function to allow us to only update one field at a time.

-------------------------------------------------------------------------------------------------------------------------------------
## January 17, 2023
Today, we worked on:

*Frontend Auth Pt. 4 The Finale

Today I started us off by picking where we had left off. The NavBar live reload issue ended up taKing us the almost the entire day. After getting some very appreciated help from two instructors, Alonso was able to figure out the issue. It turns out that we weren't passing the token on the login page, nor the signup page. After implementing his fix the NavBar would live refresh upon logging in, signing up, and logging out. While we were working on this Melissa managed to get the jewelry page up and running as well as the searchbar functionality.

-------------------------------------------------------------------------------------------------------------------------------------
## January 13, 2023
Today, we worked on:

*Frontend Auth Pt. 3

Today I started us off by trying to implement the logout functionality on our NavBar. This was actually pretty easy and it didn't take too long. I then started work on making the NavBar display diffferent things depending on whether or not the user is logged in. This is where things took a turn for the worse. I got the basic functionality of it to work almost immediately the issue was that it wouldn't live refresh the page when you'd log in, only when you would log out. We were stuck on this for the entire day and we met with multiple SEIR's we had to stop for Social Hack Hour and we have decided to pick up where we left off after the weekend.

-------------------------------------------------------------------------------------------------------------------------------------
## January 12, 2023
Today, we worked on:

*Frontend Auth Cont.

Today we started off by finishing up the signup page. We ran into a few problems but for the most part it was smooth sailing. Afterwards Cody started work on the create listings page while Alonso was working on the backend implementing a get all categories endpoint.

-------------------------------------------------------------------------------------------------------------------------------------
## January 11, 2023
Today, we worked on:

*Frontend Auth

Today Melissa showed off the updates she made to the main page and it's looking fabulous. We've started on front-end auth, but man is it painful. We spent quite a bit of time today talking with a SEIR trying to get the login page to cooperate. Thankfully we got it to work which just leaves us with signup and logout. We started work on the signup page and we plan to finish it tomorrow.

-------------------------------------------------------------------------------------------------------------------------------------
## January 10, 2023
Today, we worked on:

*Frontend

Today we started work on the front-end of the project namely the main page. We added a carousel with buttons that would take you to each category's page. We added a new migration to the backend with a categories table. Alonso managed to connect categories to the listings. So whenever a listing is created a category number is required, which is linked to the categories in the backend. 

-------------------------------------------------------------------------------------------------------------------------------------
## January 9, 2023
Today, we worked on:

*Crud for authentication

Over the weekend I cleaned up the code in accounts removing the unfinished code from when we trying to get things to work. Today I added a fetch all accounts function, a fetch for a single account based off of their ID, and I added the delete function. I also made it so the Create, Update, and Delete functions for listings required you to be logged in before you could use said funcitons. Afterwards we started laying out the plan for the frontend. We went through the pages that we'd need and assigned 2-3 people to each page, with more complicated pages/functionalities having all of us working on them together.

-------------------------------------------------------------------------------------------------------------------------------------
## January 6, 2023
Today, we worked on:

Rebuilding the project

Today we realized that we needed to have a group that the project was attached to. I created a group and linked the project to it. We later worked on backend authentication. We were able to get the create account to work as well as the login and logout functionality.

-------------------------------------------------------------------------------------------------------------------------------------
## January 5, 2023
Today, we worked on:

* Rebuilding the project

After Riley posted his fix we tried implementing it. Unfortunately, that didn't work. I tried rebuilding the project and implementing the fix, which did work. I then went through the rest of the set up steps in this new project. Afterwards we went through and got this project to the same place th at the previous project was at. We also got to work on our backend data endpoints and our SQL queries. We began work on the get_one and create endpoints which we managed to finish today.

-------------------------------------------------------------------------------------------------------------------------------------
## January 4, 2023
Today, we worked on:

* Setting up the project

Today we started setting up the project. I started us off by following the set up direction on Learn. We had to edit the docker-compose.yml file as well as addinhg the windows-setup.js file that was provided to the react app. However, we ran into an issue on the Windows side. The react app wouldn't start. We have decided to work on the rest of the project and come back to it. Riley has tried to help us with the Windows fix and is currently looking for a solution. We started by creating the routers directory as well as the queries directory. We then began working on our tables.

-------------------------------------------------------------------------------------------------------------------------------------
## January 3, 2023
Today we worked on:

* Designing the wireframe of the project as well as the planned endpoints.

Today we started work on our wireframe and our planned data endpoints. Melissa made a really fantastic looking wireframe that we will use for designing the frontend of the site. 