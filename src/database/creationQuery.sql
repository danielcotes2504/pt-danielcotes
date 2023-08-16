-- Table: public.Categorias
-- DROP TABLE IF EXISTS public."Categorias";
CREATE TABLE IF NOT EXISTS public."Categorias" (
    id bigint NOT NULL,
    nombre character varying(150) COLLATE pg_catalog."default",
    fecha_creacion timestamp without time zone,
    fecha_actualizacion timestamp without time zone,
    CONSTRAINT categorias_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;
ALTER TABLE IF EXISTS public."Categorias" OWNER to postgres;
-- Table: public.Comentarios
-- DROP TABLE IF EXISTS public."Comentarios";
CREATE TABLE IF NOT EXISTS public."Comentarios" (
    id bigint,
    "Posts_id" bigint,
    contenido character varying(500) COLLATE pg_catalog."default",
    fecha_creacion timestamp without time zone,
    fecha_actualizacion timestamp without time zone,
    CONSTRAINT posts_comentarios FOREIGN KEY ("Posts_id") REFERENCES public."Posts" (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
) TABLESPACE pg_default;
ALTER TABLE IF EXISTS public."Comentarios" OWNER to postgres;
-- Table: public.Posts
-- DROP TABLE IF EXISTS public."Posts";
CREATE TABLE IF NOT EXISTS public."Posts" (
    id bigint NOT NULL,
    "Categorias_id" bigint,
    titulo character varying(150) COLLATE pg_catalog."default",
    contenido text COLLATE pg_catalog."default",
    fecha_creacion timestamp without time zone,
    fecha_actualizacion timestamp without time zone,
    CONSTRAINT posts_pkey PRIMARY KEY (id),
    CONSTRAINT posts_categorias_id_fkey FOREIGN KEY ("Categorias_id") REFERENCES public."Categorias" (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
) TABLESPACE pg_default;
ALTER TABLE IF EXISTS public."Posts" OWNER to postgres;