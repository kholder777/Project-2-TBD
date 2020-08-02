-- Set the DB
USE bagit_DB;
-- Populate users
INSERT INTO user
    (id,name)
VALUES
    (1, 'Sam'),
    (2, 'Harry P'),
    (3, 'Tyrion'),
    (4, 'Voldamort'),
    (5, 'Melkor');

-- Populate Roles 
INSERT INTO category
    (id,name)
VALUES
    (1, 'Bread'),
    (2, 'Meat'),
    (3, 'Dairy'),
    (4, 'Produce'),
    (5, 'Seafood'),
    (6, 'Canned Goods'),
    (7, 'Baking and Cooking'),
    (8, 'Snacks'),
    (9, 'Drinks'),
    (10, 'Wine and Beer'),
    (11, 'Hygiene'),
    (12, 'Household Items'),
    (12, 'Bathroom'),
    (13, 'Laundry'),
    (14, 'Baby Stuff'),
    (15, 'Cosmetics'),
    (16, 'Paper Products'),
    (17, 'Medicine/Remedies'),
    (18, 'Freezer'),
    (19, 'Oils'),
    (20, 'Spices'),
    (21, 'Pasta'),
    (22, 'Cleaning Products'),
    (23, 'Deli'),
    (24, 'General'),
    (25, 'Uncategorized')
;

-- Populate Employees

INSERT INTO items
    (id,name,active,fav,catID,userID)
VALUES
    (001, 'Toothpaste', true, true, 1, 1),
    (002, 'Butter Beer', true, true, 10, 2),
    (003, 'Brisket', true, false, 2, 3),
    (004, 'Beef Jerky', false, false, 8, 4),
    (005, 'Yeast', false, true, 7, 4);