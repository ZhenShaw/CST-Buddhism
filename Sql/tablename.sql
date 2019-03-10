create table tablename (
    uid serial primary key,
    wechatID varchar(50) not  null,
    created_at timestamp default 'now()'

);

CREATE TABLE xinde (
    uid serial primary key,
    wechatID varchar(50) not  null,
    created_at timestamp default 'now()',
    Xinde varchar(1000),
    title VARCHAR(100)
);
create table bazi(
    uid serial primary key,
    created_at timestamp default 'now()',
    YinLi date not null,
    NianMing varchar(255),
    TianYun varchar(255),
    ShengXiao varchar(100),
    BenMing varchar(100),
    MingGua varchar(100)
);
create table fozhou (
    uid serial primary key,
    created_at timestamp default 'now()',
    bookname character varying(40),
    readnumber character varying(20),
    bookintroduce text,
    contentintroduce text,
    yuanwen text 
);
create table fojing (
    uid serial primary key,
    created_at timestamp default 'now()',
    bookname character varying(40),
    readnumber character varying(20),
    bookintroduce text,
    contentintroduce text,
    yuanwen text,
    yiwen text
);
