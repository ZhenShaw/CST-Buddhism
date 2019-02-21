create table bazizhu (
    uid serial primary key,
    created_at timestamp default 'now()',
    gongli date,
    xingqi varchar(50),
    year int,
    month varchar(50),
    day varchar(50),
    nianzhu varchar(50),
    shuxiang varchar(50),
    yuezhu varchar(50),
    rizhu varchar(50)
);

create table bazixiangjie(
    uid serial primary key,
    created_at timestamp default 'now()',
    caiyun text,
    jiankang text,
    shiye text,
    aiqing_male text,
    aiqing_female text
    

);