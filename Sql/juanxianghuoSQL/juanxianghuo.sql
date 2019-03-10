create table juanxianghuo (
    uid serial primary key,
    wechatID varchar(50) not  null,
    created_at timestamp default 'now()',
    xingming varchar(10),
    shuliang varchar(5),
    leixing varchar(20)
);