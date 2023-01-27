**Melissa's Journal**

**1/26/23**

- Finished cleaning up the code using prettier and flake8.

**1/25/23**

- Today we continued working on unit tests and went over deployment. We were all randomly assigned to tests via random number generator and I was assigned to get al categories which would test if our URL would access all of our categories. I also continued editing the styling a bit.

**1/24/23**

- Today we each began our unit tests and continued cleaning up our code a bit. I added a terms and conditions page for styling purposes and added a couple more features to the main page such as another set of cards for style.

**1/23/23**

- Today, we started the week with a standup, determining what left we have of the project. Ben and Jake worked on the sold history page, filtering, etc. I worked on creating error popups for the signup and login pages; when a user is creating an account with credentials that already exist, the error popup will come up. When a user is trying to login to an account that does not exist, an error will also pop up. We finished the day starting to clean up code and get rid of any errors in the console.

**1/20/23**

- Today, we continued the day helping Ben and Cody work on the sale history page and profile page. After hours of troubleshooting, I continued implementing styling on the mainpage, created a footer and a newsletter (only for styling purposes, the newsletter doesn't actually work) and made the jewelry page prettier. I added a "Featured Items" category on the jewlery page that filtered for certain keywords, and a "Full Collection" category displayed as cards. We plan to also implement this style on the mens and womens pages as well. I also added cards to the front page.

**1/19/23**

- Today, Ben was the driver working on the Sale History page while the rest of the team took on other tasks/ helped Ben when needed. There were a couple router and function errors and lots of troubleshooting. I continued implementing styling elements, edited the mainpage and made it prettier.

**1/18/23**

- We picked up the day with a standup, discussing what everyone has been doing on their own. I finished up the jewelry category page most of the day and adjusted the styling on the mainpage and navbar. Jake and Alonso were working on cleaning up backend data, Ben was working on sold history page and Cody was working on create a listing page.

**1/17/23**

- We picked up the day working on having the Navbar hot reload when logging in to show "List item", "Logout" and profile dropdown. Jake was the main driver for the day while the rest of us were his eyes. We were stuck on this issue for the majority of the day and it was pretty discouraging. After much appreciated help from 2 instructors, Alonso was able to successfully debug the issue which was a huge feat for the day. While simultanously helping Jake debug the auth issues, I was able to get the Jewelry page up and running. I was able to implement the search bar through filtering and getting the data to load on the page through mapping. I ran into a couple issues which Alonso was able to debug. Overall, today was a pretty successful day. At the end of the day, our group met up to reassess our Kanban and what features were left.

**1/12/23**

- We started off the day with a group stand up, redistributing the workload between group members on our Kanban. We then continued working on the signup page, me being the driver and my colleagues being the eyes. We ran into a couple issues, not being able to figure out an unprocessible entity error. However, after an hour of troubleshooting it turned out to be a spelling error! After banging my head on the desk for a minute, most of the group attended a couple meetings for an hour. We then regrouped and Cody was working on our create listings, while Alonso was working on backend endpoints, adding a get all categories endpoint.

**1/11/23**

- We started the day off great, finished the skeleton of the mainpage and continued working on frontend Auth. We had a skeleton of the login and signup form for React, however, implementing the Front-end auth cookbook was pretty challenging. Thankfully after consulting with a SEIR, we made really good headway and our login page worked! The plan for tomorrow is the complete the signup page, then move forward with our other functionalities.

**1/10/23**

- We continued following the flow of one driver, the others being the eyes and rotating every hour or so for the Mainpage.js so we can all have a place to start, then we would break off into groups later on in the week for react. We added a carousel with buttons on the mainpage that would lead to each category. We originally planned to incorporate an outside API to populate the popular categories on the main page, however after consulting with an instructor, our idea would not work. We were told to add another table to the backend "categories" instead and add API endpoints. This will allow us to filter on each categories page. We all decided a plan for how to tackle the next day, as we were all a bit discouraged after having to start from scratch.

**1/9/23**

- Today we finished up backend API endpoints for listings and accounts. This included get_listings, delete, update listings, get_accounts, delete, get_one_id. At the end of the day, we started splitting up Team tasks for frontend in our Kanban/trello board on notion. (https://ben-demaso.notion.site/Kanban-Trello-Board-5a52a971c1e044b08b134cf47313dbf5) We split up pages between 2-3 group members, one being the driver and the others being the eyes, depending on how challenging that page is.

**1/6/23**

- Today we started working on backend authentication and added the account queries and routers. We made really good progress with this.

**1/5/23**

- Today, we still faced many docker issues which led to more troubleshooting during the day, while mac folks rotated being the drivers of coding while windows folks were the eyes. We
  began creating our backend data endpoints and wrote queries (SQL) to connect to database. We worked on get_one and create endpoints. By the end of the day we were able to accomplish
  adding these routes to main.py and the routes appeared on swagger.

**1/4/23**

- Today we faced many challenges starting up the project, as 3/5 group members are on windows which had Docker issues. While troubleshooting, we edited some files including the docker-compose.yaml file and created the queries directory and routers directory. We started off by creating tables in our migrations directory and making sure the list of relations showed up ysing command `psql -h localhost -U swapshop swapshop` -> `\d` -> tables showed up.

**1/3/23**

- Worked on wireframe design and planned endpoints.
