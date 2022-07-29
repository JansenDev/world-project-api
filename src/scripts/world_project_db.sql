create table chapter(
    chapter_id serial primary key ,
    page_id bigint, --fk
    chapter_type varchar,
    title varchar
);

create table tag(
    tag_id serial primary key ,
    name varchar,
    description varchar
);

create table gender(
    gender_id serial primary key ,
    name varchar,
    description varchar
);

create table title(
    title_id serial primary key ,
    collection_id bigint, --fk
    name varchar,
    is_current_name boolean
);

create table page(
    page_id serial primary key ,
    chapter_id bigint,--fk
    index boolean default false,
    book_id bigint, --fk
    page_number int,
    image varchar,
    text text,
);

create table book(
    book_id serial primary key ,
    collection_id bigint,--fk
    page_id bigint, --fk
    volume_number int,
    book_name varchar,
    pages_total int,
    pages_translated int
);

create table collection(
    collection_id serial primary key ,
    name varchar,
    volumes int,
    volumes_total int null,
    volumes_extra int default 0,
    synopsis varchar,
    image varchar,
    gender_id bigint, --fk
    tag_id bigint, --fk
    author varchar,
    first_post varchar,
    last_post varchar,
    background varchar,
    popularity int default 0,
    create_at varchar default (now() at time zone 'America/Lima')
);

create table collection_gender(
    collection_gender_id serial primary key,
    collection_id bigint, --fk
    gender_id bigint --fk
)


-- FK
alter table collection_gender
add constraint collection_fk  foreign key (collection_id) references collection(collection_id),
add constraint gender_fk foreign key (gender_id) references  gender(gender_id);