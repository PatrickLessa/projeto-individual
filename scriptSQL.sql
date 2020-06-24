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
    , title varchar(200)
    , resum text 
    , pub text
    , caminhoFoto varchar(50)
    , fkUser int
    , foreign key (fkUser) references tbUser(codUser)
);

desc tbPost;

insert into tbPost(title, resum, pub, caminhoFoto, fkUser)
values
	('Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet consectetur ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum
                        magnam, distinctio fugiat facilis, explicabo temporibus libero hic quod, earum alias natus pariatur dolor! Quam praesentium itaque qui.', 'noMercy.jpg', 13);
			
select * from tbPost order by codPost desc;