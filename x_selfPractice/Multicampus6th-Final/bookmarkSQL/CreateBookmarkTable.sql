CREATE TABLE `bookmark`(
	`bookmarkid` int(10) PRIMARY KEY AUTO_INCREMENT,
	`userid` VARCHAR(1000),
	`recipeid` int(20)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

DROP TABLE `bookmark`;
SELECT * FROM bookmark;
SELECT EXISTS (SELECT * from bookmark WHERE userid = "a@naver.com" AND recipeid=1);

SELECT * FROM recipe;

6924266
6912734;


USE testdb;

SELECT * FROM bookmark WHERE userid="a@naver.com" AND recipeid IN(39415,1,3236);

SELECT recipeid FROM bookmark WHERE EXISTS (SELECT recipeid FROM bookmark WHERE recipeid=3236); 


INSERT into bookmark VALUES ("wjsguswls71@na.com",6864512);
INSERT into bookmark VALUES ("wjsguswls71@na.com",3022774);
INSERT into bookmark VALUES ("wjsguswls71@na.com",6734032);
INSERT into bookmark VALUES ("wjsguswls71@na.com",6844419);