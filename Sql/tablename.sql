create table tablename (
    uid serial primary key,
    wechatID varchar(50) not  null,
    created_at timestamp default 'now()'

);

CREATE TABLE xinde (
    uid serial primary key,
    wechatID varchar(50) not  null,
    created_at timestamp default 'now()',
    Xinde varchar(1000)
);
create table bazi(
    YinLi date not null,
    NianMing varchar(255),
    TianYun varchar(255),
    ShengXiao varchar(100),
    BenMing varchar(100),
    MingGua varchar(100)
);