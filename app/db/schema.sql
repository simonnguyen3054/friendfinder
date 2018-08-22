DROP DATABASE IF EXISTS matching_db;

CREATE DATABASE matching_db;

USE matching_db;

CREATE TABLE user_answers(
	user_id INT NOT NULL AUTO_INCREMENT,
	question_one INT NOT NULL,
	question_two INT NOT NULL,
	question_three INT NOT NULL,
	PRIMARY KEY (user_id)
);