alter table "public"."article" add column "created_at" timestamptz
 null default now();
