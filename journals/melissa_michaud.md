**Melissa's Journal**
**1/3/23**
- Worked on wireframe design and planned endpoints.

**1/4/23**
- Today we faced many challenges starting up the project, as 3/5 group members are on windows which had Docker issues. While troubleshooting, we edited some files including the docker-compose.yaml file and created the queries directory and routers directory. We started off by creating tables in our migrations directory and making sure the list of relations showed up ysing command `psql -h localhost -U swapshop swapshop` -> `\d` -> tables showed up.

**1/5/23**
- Today, we still faced many docker issues which led to more troubleshooting during the day, while mac folks rotated being the drivers of coding while windows folks were the eyes. We
began creating our backend data endpoints and wrote queries (SQL) to connect to database. We worked on get_one and create endpoints. By the end of the day we were able to accomplish
adding these routes to main.py and the routes appeared on swagger.

**1/6/23**
- Today we started working on backend authentication and added the account queries and routers. We made really good progress with this.

**1/9/23**
- Today we finished up backend API endpoints for listings and accounts. This included get_listings, delete, update listings, get_accounts, delete, get_one_id. At the end of the day, we started splitting up Team tasks for frontend in our Kanban/trello board on notion. (https://ben-demaso.notion.site/Kanban-Trello-Board-5a52a971c1e044b08b134cf47313dbf5) We split up pages between 2-3 group members, one being the driver and the others being the eyes, depending on how challenging that page is.

**1/10/23**
- We continued following the flow of one driver, the others being the eyes and rotating every hour or so for the Mainpage.js so we can all have a place to start, then we would break off into groups later on in the week for react. We added a carousel with buttons on the mainpage that would lead to each category. We originally planned to incorporate an outside API to populate the popular categories on the main page, however after consulting with an instructor, our idea would not work. We were told to add another table to the backend "categories" instead and add API endpoints. This will allow us to filter on each categories page. We all decided a plan for how to tackle the next day, as we were all a bit discouraged after having to start from scratch.

**1/11/23**
- We started the day off great, finished the skeleton of the mainpage and continued working on frontend Auth. We had a skeleton of the login and signup form for React, however, implementing the Front-end auth cookbook was pretty challenging. Thankfully after consulting with a SEIR, we made really good headway and our login page worked! The plan for tomorrow is the complete the signup page, then move forward with our other functionalities.

**1/12/23**
- We started off the day with a group stand up, redistributing the workload between group members on our Kanban.
