DROP DATABASE IF EXISTS test_db;
CREATE DATABASE test_db;

USE test_db;

CREATE TABLE gigs (
id INT NOT NULL auto_increment,
title varchar(200) NULL,
technologies varchar(200) NULL,
budget varchar(20) NULL,
description text,
contact_email varchar(200) NULL,
createdAt date NULL,
updatedAt date NULL,
PRIMARY KEY (id)
);