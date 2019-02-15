CREATE TABLE trainingsession (
ID int NOT NULL PRIMARY KEY,
name varchar(255),
minutes long,
date DATE
);

INSERT INTO trainingsession (name, minutes, date) VALUES ("test", 90, "2017-06-15");