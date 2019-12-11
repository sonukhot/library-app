CREATE DATABASE LIBRARY

USE LIBRARY

CREATE TABLE users
id INT AUTO_INCREMENT,
username VARCHAR(255),
password VARCHAR(255),
PRIMARY KEY(id),
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
deletedAt DATETIME

CREATE TABLE items
id INT AUTO_INCREMENT,
item VARCHAR(255),
category ENUM('fun', 'tech', 'tools', 'home') ,
availability ENUM('in', 'out'),
checkedoutby INT
PRIMARY KEY(id)
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
deletedAt DATETIME

