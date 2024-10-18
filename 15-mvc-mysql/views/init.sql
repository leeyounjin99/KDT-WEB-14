create table visitor (
  id int not null primary key ayto_increment,
  name varchar(10) not null,
  comment mediumtext
);

insert into visitor (name, comment) values("홍길동", "내가 왔다");
insert into visitor (name, comment) values("이찬혁", "으라차차");

-- user 생성
create user 'user'@'localhost' identified by '1234';
-- 
grant all privileges on *.* to 'user'@'localhost' with grant option;
