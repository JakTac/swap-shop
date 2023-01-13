steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE listings (
            listings_id SERIAL PRIMARY KEY NOT NULL,
            image_url TEXT NOT NULL,
            name TEXT NOT NULL,
            category_id INT NOT NULL,
            condition TEXT NOT NULL,
            price FLOAT NOT NULL,
            description TEXT NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE listings;
        """
    ],

    [
        """
        CREATE TABLE accounts (
          id SERIAL PRIMARY KEY NOT NULL,
          email VARCHAR(100) NOT NULL UNIQUE,
          hashed_password TEXT NOT NULL,
          first_name VARCHAR(100) NOT NULL,
          last_name VARCHAR(100) NOT NULL
        );
        """,
        """
        DROP TABLE accounts;
        """
    ]




]
