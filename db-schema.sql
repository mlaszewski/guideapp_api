CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"name" varchar NOT NULL,
	"lastname" varchar NOT NULL,
	"email" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL,
	"avatar" varchar,
	"logged_in" BOOLEAN NOT NULL DEFAULT 'false',
	"is_guide" BOOLEAN NOT NULL DEFAULT 'false',
	"description" varchar,
	"experience" varchar,
	"courses" varchar,
	"licenses" varchar,
	"specs" varchar,
	"languages" varchar
);

CREATE TABLE "places" (
	"id" serial PRIMARY KEY,
	"name" varchar NOT NULL,
	"address" varchar NOT NULL,
	"coordinates_x" varchar NOT NULL,
	"coordinates_y" varchar NOT NULL,
	"city" varchar NOT NULL,
	"country" varchar NOT NULL
);

CREATE TABLE "offer" (
	"id" serial PRIMARY KEY,
	"place_id" int NOT NULL,
	"guide_id" int NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"price" int NOT NULL,
	CONSTRAINT "fk_place" FOREIGN KEY ("place_id") REFERENCES "places"("id"),
	CONSTRAINT "fk_guide" FOREIGN KEY ("guide_id") REFERENCES "users"("id")
);

CREATE TABLE "offer_opinion" (
	"id" serial PRIMARY KEY,
	"offer_id" int NOT NULL,
	"offer_rating" int NOT NULL,
	"comment" varchar,
	"place_rating" int NOT NULL,
	"like_count" int NOT NULL DEFAULT '0',
	"dislike_count" int NOT NULL DEFAULT '0',
	CONSTRAINT "fk_offer" FOREIGN KEY ("offer_id") REFERENCES "offer"("id")
);

CREATE TABLE "guide_opinion" (
	"id" serial PRIMARY KEY,
	"adviser_id" int NOT NULL,
	"guide_id" int NOT NULL,
	"offer_id" int NOT NULL,
	"rating" int NOT NULL,
	"comment" int,
	"like_count" int NOT NULL DEFAULT '0',
	"dislike_count" int NOT NULL DEFAULT '0',
	CONSTRAINT "fk_adviser" FOREIGN KEY ("adviser_id") REFERENCES "users"("id"),
	CONSTRAINT "fk_guide" FOREIGN KEY ("guide_id") REFERENCES "users"("id"),
	CONSTRAINT "fk_offer" FOREIGN KEY ("offer_id") REFERENCES "offer"("id")
);

CREATE TABLE "user_fav_guides" (
	"user_id" int NOT NULL,
	"guide_id" int NOT NULL,
	CONSTRAINT "fk_user" FOREIGN KEY ("user_id") REFERENCES "users"("id"),
	CONSTRAINT "fk_guide" FOREIGN KEY ("guide_id") REFERENCES "users"("id")
);

CREATE TABLE "term" (
	"id" serial PRIMARY KEY,
	"timestamp" TIMESTAMP NOT NULL,
	"guide_id" int NOT NULL,
	"is_reserved" boolean NOT NULL DEFAULT 'false',
	CONSTRAINT "fk_guide" FOREIGN KEY ("guide_id") REFERENCES "users"("id")
);

CREATE TABLE "trip" (
	"id" serial PRIMARY KEY,
	"offer_id" int NOT NULL,
	"term_id" int NOT NULL,
	"reserved_by" int NOT NULL,
	CONSTRAINT "fk_offer" FOREIGN KEY ("offer_id") REFERENCES "offer"("id"),
	CONSTRAINT "fk_term" FOREIGN KEY ("term_id") REFERENCES "term"("id"),
	CONSTRAINT "fk_user" FOREIGN KEY ("reserved_by") REFERENCES "users"("id")
);

CREATE TABLE "message" (
	"id" serial PRIMARY KEY,
	"chat_id" int NOT NULL,
	"sender_id" int NOT NULL,
	"receiver_id" int NOT NULL,
	"text" int NOT NULL,
	"datetime" TIMESTAMP NOT NULL,
	CONSTRAINT "fk_sender" FOREIGN KEY ("sender_id") REFERENCES "users"("id"),
	CONSTRAINT "fk_receiver" FOREIGN KEY ("receiver_id") REFERENCES "users"("id")
);












