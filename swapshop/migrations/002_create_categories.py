steps = [
    [
        """
            CREATE TABLE categories (
            id SERIAL PRIMARY KEY NOT NULL,
            category VARCHAR(50) NOT NULL UNIQUE
            );
            """,
        """
            DROP TABLE categories;
            """,
    ],
    [
        """
            INSERT INTO categories ( category)
            VALUES
            ('Men'),
            ('Women'),
            ('Jewelry')
            RETURNING id;
            """,
        """
            DELETE FROM categories;
            """,
    ],
]
