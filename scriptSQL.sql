create database bdThrashWiki;
use bdThrashWiki;

create table tbUser(
	codUser int primary key auto_increment
	, usuario varchar (45) 
    , nomeUser varchar(70) 
    , email varchar(38)
    , senha varchar(16)
);

create table tbPost(
	codPost int primary key auto_increment
    , title varchar(35)
    , resum varchar(70) 
    , pub text
    , fkUser int
    , foreign key (fkUser) references tbUser(codUser)
);

create table tbPhoto(
	codPhoto int primary key auto_increment
    , wayPhoto varchar(30)
    , fkPost int
    , foreign key (fkPost) references tbPost(codPost)
);