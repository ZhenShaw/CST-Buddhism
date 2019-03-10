create table qiuqian(
    uid serial primary key,
    wechatID varchar(50) not  null,
    created_at timestamp default 'now()',
    Numbers varchar(100),
    Types varchar(100),
    Qianyu varchar(300),
    Jieqian varchar(300)
);