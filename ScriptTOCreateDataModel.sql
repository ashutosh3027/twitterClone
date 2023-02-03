CREATE DATABASE IF NOT EXISTS twitterClone;
use twitterClone;
CREATE TABLE IF NOT EXISTS `User` (
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_name` varchar(255),
  `email` varchar(255) UNIQUE,
  `password` varchar(255),
  `role` ENUM ('Producer', 'Subscriber'),
  `created_at` datetime NOT NULL DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS `Message` (
  `message_id` int PRIMARY KEY AUTO_INCREMENT,
  `subject` varchar(255),
  `content` text NOT NULL COMMENT 'Message must have some text',
  `user_id` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT (now()),
  `updated_at` datetime NOT NULL DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS `Subscribe` (
  `subscribe_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id_follow` int,
  `user_id_following` int,
  `status` boolean DEFAULT (false)
);

CREATE INDEX  `Users_index_0` ON `User` (`email`);

CREATE INDEX  `Message_index_1` ON `Message` (`user_id`);

CREATE INDEX   `Message_index_2` ON `Message` (`content`);

ALTER TABLE `Message` ADD FOREIGN KEY  (`user_id`) REFERENCES `User` (`user_id`);

ALTER TABLE `Subscribe` ADD FOREIGN KEY  (`user_id_follow`) REFERENCES `User` (`user_id`);

ALTER TABLE `Subscribe` ADD FOREIGN KEY  (`user_id_following`) REFERENCES `User` (`user_id`);
