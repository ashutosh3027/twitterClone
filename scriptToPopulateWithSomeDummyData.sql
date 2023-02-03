/***************************
**query for creating user**
****************************/

use twitterClone;
INSERT INTO USER (user_name, email, password, role) VALUES ('xyz1', 'xyz1@gmail.com', '123456789', 'Producer');
INSERT INTO USER (user_name, email, password, role) VALUES ('xyz2', 'xyz2@gmail.com', '12345678', 'Producer');
INSERT INTO USER (user_name, email, password, role) VALUES ('xyz3', 'xyz3@gmail.com', '123456', 'Subscriber');
INSERT INTO USER (user_name, email, password, role) VALUES ('xyz4', 'xyz4@gmail.com', '1234567', 'Subscriber');
INSERT INTO USER (user_name, email, password, role) VALUES ('xyz5', 'xyz5@gmail.com', '1234', 'Subscriber');
INSERT INTO USER (user_name, email, password, role) VALUES ('xyz6', 'xyz6@gmail.com', '12345', 'Subscriber');

/******************************
**query for creating messages**
*******************************/
INSERT INTO MESSAGE (subject, content, user_id) VALUES ('Greeting', 'Hello world', 1);
INSERT INTO MESSAGE (subject, content, user_id) VALUES ('Greeting', 'Hello world', 1);
INSERT INTO MESSAGE (subject, content, user_id) VALUES ('Greeting', 'Hello world', 2);
INSERT INTO MESSAGE (subject, content, user_id) VALUES ('Greeting', 'Hello world', 2);
INSERT INTO MESSAGE (subject, content, user_id) VALUES ('Greeting', 'Hello world', 1);
INSERT INTO MESSAGE (subject, content, user_id) VALUES ('Greeting', 'Hello world', 2);

/******************************
* For subscribing producer
*******************************/

INSERT INTO Subscribe (user_id_follow, user_id_following, status) VALUES (3,1,1);
INSERT INTO Subscribe (user_id_follow, user_id_following, status) VALUES (4,1,1);
INSERT INTO Subscribe (user_id_follow, user_id_following, status) VALUES (5,1,1);
INSERT INTO Subscribe (user_id_follow, user_id_following, status) VALUES (6,1,1);
INSERT INTO Subscribe (user_id_follow, user_id_following, status) VALUES (2,1,1);
INSERT INTO Subscribe (user_id_follow, user_id_following, status) VALUES (3,2,1);
INSERT INTO Subscribe (user_id_follow, user_id_following, status) VALUES (4,2,1);
INSERT INTO Subscribe (user_id_follow, user_id_following, status) VALUES (5,2,1);
INSERT INTO Subscribe (user_id_follow, user_id_following, status) VALUES (6,2,1);
