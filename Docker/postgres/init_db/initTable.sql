
-- 心得表
CREATE TABLE xinde (
    uid serial primary key,
    wechatID varchar(50) not  null,
    created_at timestamp default now(),
    Xinde varchar(1000),
    title VARCHAR(100)
);

-- 生辰八字表
create table bazi(
    uid serial primary key,
    created_at timestamp default now(),
    YinLi date not null,
    NianMing varchar(255),
    TianYun varchar(255),
    ShengXiao varchar(100),
    BenMing varchar(100),
    MingGua varchar(100)
);
-- 算命解读
create table bazizhu (
    uid serial primary key,
    created_at timestamp default now(),
    gongli date,
    xingqi varchar(50),
    year int,
    month varchar(50),
    day varchar(50),
    nianzhu varchar(50),
    shuxiang varchar(50),
    yuezhu varchar(50),
    rizhu varchar(50),
    nianming varchar(50)
);
-- 八字详解表
create table bazixiangjie(
    uid serial primary key,
    created_at timestamp default now(),
    caiyun text,
    jiankang text,
    shiye text,
    aiqing_male text,
    aiqing_female text
    

);

-- 佛咒表
create table fozhou (
    uid serial primary key,
    created_at timestamp default now(),
    bookname character varying(40),
    readnumber character varying(20),
    bookintroduce text,
    contentintroduce text,
    yuanwen text 
);

-- 佛经表
create table fojing (
    uid serial primary key,
    created_at timestamp default now(),
    bookname character varying(40),
    readnumber character varying(20),
    bookintroduce text,
    contentintroduce text,
    yuanwen text,
    yiwen text
);

-- 印经书列表
CREATE TABLE Donatorinfo
(
	uid serial primary key,
	wechatID varchar(50) not  null,
	created_at timestamp default now(),
	scriptureName character varying(100) NOT NULL,
	donateNum integer
);

-- 助印经书记录
CREATE TABLE scriptureinfo
(
	uid serial primary key,
	created_at timestamp default now(),
	scriptureName character varying(100) NOT NULL UNIQUE,
	targetNum integer NOT NULL,
	nowNum integer NOT NULL,
	donatorNum integer NOT NULL
);


-- 求签
create table qiuqian(
    uid serial primary key,
    wechatID varchar(50) not  null,
    created_at timestamp default now(),
    Numbers varchar(100),
    Types varchar(100),
    Qianyu varchar(300),
    Jieqian varchar(300)
);

-- 供佛数据表
create table gongfo (
    uid serial primary key,
    created_at timestamp default now(),
    name text,
    url text,
    details text,
   	status int
);

-- 捐赠香火
create table juanxianghuo (
    uid serial primary key,
    wechatID varchar(50) not  null,
    created_at timestamp default 'now()',
    xingming varchar(10),
    shuliang varchar(5),
    leixing varchar(20)
);
