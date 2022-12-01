
CREATE TABLE public."role" (
	id serial2 NOT NULL,
	title varchar(4) NOT NULL,
	CONSTRAINT role_pk PRIMARY KEY (id)
);

CREATE TABLE public."user" (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	email varchar NOT NULL,
	"password" varchar NOT NULL,
	"lastLogin" timestamp NOT NULL,
	"roleId" int2 NOT NULL,
	"phoneNumber" varchar(11) NULL,
	CONSTRAINT user_pk PRIMARY KEY (id),
	CONSTRAINT user_fk FOREIGN KEY ("roleId") REFERENCES public."role"(id)
);

CREATE TABLE public.product (
	id serial4 NOT NULL ,
	"name" varchar NOT NULL,
	"cost" int8 NOT NULL,
	"image" varchar NOT NULL,
	"description" varchar NOT NULL,
	"off" int2 NULL,
	CONSTRAINT product_pk PRIMARY KEY (id)
);


CREATE TABLE public.cart (
	id serial4 NOT NULL,
	"productId" int4 NOT NULL,
	"userId" int4 NOT NULL,
	code varchar NOT NULL,
	"status" int4 NOT NULL,
	"submitDate" timestamp NOT NULL,
	CONSTRAINT cart_pk PRIMARY KEY (id),
	CONSTRAINT cart_fk FOREIGN KEY (id) REFERENCES public."user"(id),	
	CONSTRAINT cart_fk_1 FOREIGN KEY (id) REFERENCES public."product"(id)
);
