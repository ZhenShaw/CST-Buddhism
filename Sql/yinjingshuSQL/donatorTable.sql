CREATE TABLE Donatorinfo
(
	uid serial primary key,
	wechatID varchar(50) not  null,
	created_at timestamp default now(),
	scriptureName character varying(100) NOT NULL,
	donateNum integer
);
