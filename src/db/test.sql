Create database userLogin;

use userLogin;

 Create table if not exists users(
     id int(10) unsigned not null auto_increment,
     email varchar(100) collate utf8_unicode_ci not null,
     password varchar(200) collate utf8_unicode_ci not null,
     created_at timestamp default current_timestamp,
     updated_at timestamp default current_timestamp on update current_timestamp,
     primary key(id),
     unique key users_email_unique (email)
 ) engine = InnoDB default character set=utf8;

 Describe users;
 
 Create table if not exists lvoptions(
	id int(10) unsigned not null auto_increment,
	optionName varchar(100) collate utf8_unicode_ci not null);
 