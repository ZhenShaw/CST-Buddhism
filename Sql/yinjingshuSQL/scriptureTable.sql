CREATE TABLE scriptureinfo
(
	uid serial primary key,
	created_at timestamp default now(),
	scriptureName character varying(100) NOT NULL UNIQUE,
	targetNum integer NOT NULL,
	nowNum integer NOT NULL,
	donatorNum integer NOT NULL
);
