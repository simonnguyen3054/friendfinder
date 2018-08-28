DROP DATABASE IF EXISTS matching_db;

CREATE DATABASE matching_db;

USE matching_db;

CREATE TABLE user_answers(
	user_id INT NOT NULL AUTO_INCREMENT,
	question_one INT NOT NULL,
	question_two INT NOT NULL,
	question_three INT NOT NULL,
	question_four INT NOT NULL,
	question_five INT NOT NULL,
	question_six INT NOT NULL,
	question_seven INT NOT NULL,
	question_eight INT NOT NULL,
	question_nine INT NOT NULL,
	question_ten INT NOT NULL,
	PRIMARY KEY (user_id)
);

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	user_answers_id INT NULL,
	name VARCHAR(255) NOT NULL,
	img_url VARCHAR(255) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_answers_id) REFERENCES user_answers(user_id)
);