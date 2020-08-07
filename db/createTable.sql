DROP TABLE IF EXISTS member;
CREATE TABLE IF NOT EXISTS member (
id int NOT NULL auto_increment,
name varchar(20) NOT NULL,
email varchar(20) NOT NULL,
phone varchar(20) NOT NULL,
join_date date,
PRIMARY KEY (id));

INSERT INTO member (name, email, phone, join_date) VALUES ('kenneth', 'dlsrks1218@daum.net', '010-1234-5678', '2020-08-06');
INSERT INTO member (name, email, phone, join_date) VALUES ('happy', 'dlsrks1218@daum.net', '010-2222-4444', '2020-08-07');
