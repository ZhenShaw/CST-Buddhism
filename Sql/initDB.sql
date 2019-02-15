create table users (
    uid serial primary key,
    username varchar(20) unique not null,
    password varchar(20) not null,
    nickname varchar(30),
    email varchar(50),
    identity varchar(20) default 'common',
    phone varchar(13),
    sex char(2) default '2',
    age smallint,
    is_del boolean default FALSE,
    created_date timestamp default 'now()'
);