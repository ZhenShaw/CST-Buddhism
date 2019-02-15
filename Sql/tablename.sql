create table tablename (
    uid serial primary key,
    wechatID varchar(50) not  null,
    created_at timestamp default 'now()'

);q