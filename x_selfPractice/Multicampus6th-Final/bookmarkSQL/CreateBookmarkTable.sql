CREATE TABLE `bookmark`(
	`bookmarkid` int(10) PRIMARY KEY AUTO_INCREMENT,
	`userid` VARCHAR(1000),
	`recipeid` int(20)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

SELECT * FROM bookmark;