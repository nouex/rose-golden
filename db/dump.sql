--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: citext; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: complexes; Type: TABLE; Schema: public; Owner: amauri
--

CREATE TABLE public.complexes (
    id uuid NOT NULL,
    name text,
    gender text,
    description text,
    rent integer,
    "hasPrivateRoom" boolean,
    "hasMusicRoom" boolean,
    "hasWasher" boolean,
    "isHouse" boolean,
    "studentCapacity" text,
    "parkingSpaces" text,
    "processingFee" text,
    "securityDeposit" text,
    "vacancyStatus" text,
    "wardInfo" text,
    "floorPlans" text,
    thumbnail uuid
);


ALTER TABLE public.complexes OWNER TO amauri;

--
-- Name: contacts; Type: TABLE; Schema: public; Owner: amauri
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    manager text,
    address text,
    phone text,
    email text,
    fax text,
    website text
);


ALTER TABLE public.contacts OWNER TO amauri;

--
-- Name: contact_id_seq; Type: SEQUENCE; Schema: public; Owner: amauri
--

CREATE SEQUENCE public.contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contact_id_seq OWNER TO amauri;

--
-- Name: contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: amauri
--

ALTER SEQUENCE public.contact_id_seq OWNED BY public.contacts.id;


--
-- Name: images; Type: TABLE; Schema: public; Owner: amauri
--

CREATE TABLE public.images (
    id uuid NOT NULL,
    slug text NOT NULL
);


ALTER TABLE public.images OWNER TO amauri;

--
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contact_id_seq'::regclass);


--
-- Data for Name: complexes; Type: TABLE DATA; Schema: public; Owner: amauri
--

COPY public.complexes (id, name, gender, description, rent, "hasPrivateRoom", "hasMusicRoom", "hasWasher", "isHouse", "studentCapacity", "parkingSpaces", "processingFee", "securityDeposit", "vacancyStatus", "wardInfo", "floorPlans", thumbnail) FROM stdin;
c7794c9e-0430-498b-a68e-4b3b99c9b616	Centre Square	\N	\N	1400	f	t	t	f	\N	\N	\N	\N	\N	\N	\N	f0816391-f3be-4463-9d81-be67454a8c3f
c7b443da-203c-4ef1-9170-d060af69162b	Tuscanny	\N	\N	1500	t	t	f	f	\N	\N	\N	\N	\N	\N	\N	f0816391-f3be-4463-9d81-be67454a8a7f
44fe8e92-01a8-41f1-804b-adf15af9324e	Spori Villa	\N	\N	950	t	f	t	t	\N	\N	\N	\N	\N	\N	\N	f0816391-f3be-4463-9d81-be67454a8c7f
c7b443da-203c-4ef1-9170-d060af69161b	Towers One	\N	\N	1300	f	t	t	f	\N	\N	\N	\N	\N	\N	\N	f0816391-f3be-4463-9d81-be67454a8b6f
\.


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: amauri
--

COPY public.contacts (id, manager, address, phone, email, fax, website) FROM stdin;
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: amauri
--

COPY public.images (id, slug) FROM stdin;
f0816391-f3be-4463-9d81-be67454a8c7f	spori-villa.jpg
f0816391-f3be-4463-9d81-be67454a8c3f	centre-square.jpg
f0816391-f3be-4463-9d81-be67454a8a7f	tuscanny.jpg
f0816391-f3be-4463-9d81-be67454a8b6f	towers-one.jpg
\.


--
-- Name: contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: amauri
--

SELECT pg_catalog.setval('public.contact_id_seq', 1, false);


--
-- Name: complexes complexes_pkey; Type: CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.complexes
    ADD CONSTRAINT complexes_pkey PRIMARY KEY (id);


--
-- Name: contacts contact_pkey; Type: CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contact_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: complexes complexes_thumbnail_fkey; Type: FK CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.complexes
    ADD CONSTRAINT complexes_thumbnail_fkey FOREIGN KEY (thumbnail) REFERENCES public.images(id);


--
-- PostgreSQL database dump complete
--

