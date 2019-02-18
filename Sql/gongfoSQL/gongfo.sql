create table gongfo (
    uid serial primary key,
    created_at timestamp default 'now()',
    name text,
    url text,
    details text,
   	 status int
);
