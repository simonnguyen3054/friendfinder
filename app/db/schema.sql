CREATE DATABASE matching_db;

USE matching_db;

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	question TEXT NOT NULL,
	PRIMARY KEY (id)
);