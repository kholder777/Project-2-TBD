DROP DATABASE IF EXISTS bagit_DB;
CREATE DATABASE bagit_DB;

USE bagit_DB;

CREATE TABLE category
(
  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR
  (30) NOT NULL
  );

  CREATE TABLE user
  (
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR
    (30) NOT NULL
  );


    CREATE TABLE items
    (
      id INT NOT NULL
      AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR
      (30) NOT NULL,
  active BOOLEAN,
  fav BOOLEAN,
shopped BOOLEAN,
  catID INT NOT NULL,
     FOREIGN KEY
      (catID)
     REFERENCES category
      (id)
     ON
      DELETE CASCADE,
  userId INT
      NOT NULL,
    FOREIGN KEY
      (userId)
    REFERENCES user
      (id)
    ON
      DELETE CASCADE
    );
