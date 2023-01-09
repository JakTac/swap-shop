As a group, the backend FastAPI work was carried out via paired programming, with one person serving as the driver and the other four as the eyes, alternating every one to two hours.

**1/3/23**
- Worked on wireframe design and planned endpoints.

**1/4/23**
- Edited the docker-compose.yaml file: DATABASE_URL, SIGNING_KEY, etc.
- Created queries directory and routers directory
- Queries -> pool.py created.
- Created our tables in 001_create_my_table.py migrations file: listings table, accounts table.
- Started up Docker containers and applied migrations to database -> made sure list of relations showed using command 'psql -h localhost -U swapshop swapshop' -> \d -> tables showed up.

**1/5/23**
- Began creating our backend data endpoints -> listings.py files in routers.py and queries.py.
- Added endpoints for listings in routers -> listings.py: get_one and create_listing.
- Wrote queries (SQL) to connect to database in queries -> listings.py: worked on get_one and create.
- Added routes to main.py -> routes appeared on swagger.

**1/6/23**
- Started working on authentication: authenticator.py.
- Created queries -> accounts.py: Classes: Error, DuplicateAccountError, AccountIn, AccountOut, AccountOutWithPassword, AccountQueries, create, get_one.
- Created routers -> accounts.py: Classes: AccountForm, AccountToken, HttpError, create_account, get_token.

**1/9/23**
- Finished up backend API endpoints for listings and accounts.
- queries -> listings.py: get_listings, delete, update listings
- routers -> listings.py: get_listings, delete, put.
- queries -> accounts.py: get_accounts, delete, get_one_id.
- routers -> accounts.py: get_accounts, delete_account, get_one.
- Started splitting up Team tasks for frontend in our Kanban/trello board on notion.
