

INSERT INTO users (first_name, last_name, email, manager_id) VALUES 
    ('Bob', 'Agnello', 'bob@email.com', null),
    ('Jane', 'Doe', 'jane@email.com', null),
    ('Kara', 'DeLucia', 'kara@email.com', 2);

INSERT INTO shops (name, address, user_id) VALUES
    ('Bobs Wines', '1234 Vine Street', 1),
    ('Bobs Wines 2', '1234 Barrel Road', 1),
    ('Jane Doe Winery', '1500 Shop Avenue', 2);

INSERT INTO wines (brand, type, region, price, shop_id, user_id) VALUES 
    ('Josh', 'Cabernet', 'Napa Valley', 15.00, 1, 1),
    ('Chateau Arnauld 2018', 'Bordeaux', 'France', 41.99, 3, 2),
    ('Domaine de Chevalier 2018', 'Bordeaux', 'France', 94.99, 3, 3);




-- NOTES -------------------------
-- CAN INPUT BULK VALUES WITH COMMAS 