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


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: gender; Type: TYPE; Schema: public; Owner: amauri
--

CREATE TYPE public.gender AS ENUM (
    'M',
    'F',
    'B'
);


ALTER TYPE public.gender OWNER TO amauri;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: complexes; Type: TABLE; Schema: public; Owner: amauri
--

CREATE TABLE public.complexes (
    id uuid NOT NULL,
    name text,
    description text,
    "hasPrivateRoom" boolean,
    "hasMusicRoom" boolean,
    "hasWasher" boolean,
    "isHouse" boolean,
    "parkingSpaces" text,
    "processingFee" text,
    "securityDeposit" text,
    "vacancyStatus" text,
    "wardInfo" text,
    "floorPlans" text,
    thumbnail uuid,
    gender public.gender,
    "minRent" integer,
    "maxRent" integer,
    contact uuid,
    "studentCapacity" integer
);


ALTER TABLE public.complexes OWNER TO amauri;

--
-- Name: contacts; Type: TABLE; Schema: public; Owner: amauri
--

CREATE TABLE public.contacts (
    id uuid NOT NULL,
    manager text,
    address text,
    phone text,
    email text,
    fax text,
    website text
);


ALTER TABLE public.contacts OWNER TO amauri;

--
-- Name: images; Type: TABLE; Schema: public; Owner: amauri
--

CREATE TABLE public.images (
    id uuid NOT NULL,
    slug text NOT NULL,
    "complexId" uuid
);


ALTER TABLE public.images OWNER TO amauri;

--
-- Data for Name: complexes; Type: TABLE DATA; Schema: public; Owner: amauri
--

COPY public.complexes (id, name, description, "hasPrivateRoom", "hasMusicRoom", "hasWasher", "isHouse", "parkingSpaces", "processingFee", "securityDeposit", "vacancyStatus", "wardInfo", "floorPlans", thumbnail, gender, "minRent", "maxRent", contact, "studentCapacity") FROM stdin;
c7b443da-203c-4ef1-9170-d060af69161b	Towers Two	\N	f	t	t	f	80	\N	\N	\N	\N	\N	f0816391-f3be-4463-9d81-be67454a8b6f	F	1350	1450	c2fe8486-69d3-477b-9a16-fab2c9d6bb62	90
44fe8e92-01a8-41f1-804b-adf15af9324e	Spori Villa	\N	t	f	t	t	10	\N	\N	\N	\N	\N	f0816391-f3be-4463-9d81-be67454a8c7f	M	950	950	db2c6476-4ca3-4f8f-bd31-0ed74be321b7	9
c7b443da-203c-4ef1-9170-d060af69162b	Milano Flats	\N	t	t	f	f	75	\N	\N	\N	\N	\N	f0816391-f3be-4463-9d81-be67454a8a7f	B	1390	1570	1498ba3f-9521-452f-b9a2-7df5b86c2fc5	150
c7794c9e-0430-498b-a68e-4b3b99c9b616	Centre Square (Men)	\N	f	t	t	f	130	\N	\N	\N	\N	\N	f0816391-f3be-4463-9d81-be67454a8c3f	M	1399	1499	e1172682-6a38-49a6-bd1c-aaa85ff7613c	220
\.


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: amauri
--

COPY public.contacts (id, manager, address, phone, email, fax, website) FROM stdin;
db2c6476-4ca3-4f8f-bd31-0ed74be321b7	Richard Taylor	174 College Ave	(208) 351-8072	taylorr@byui.edu	\N	\N
1498ba3f-9521-452f-b9a2-7df5b86c2fc5	Cami Park	440 S 2nd W	(208) 356-3480	milanoflats@redstoneresidential.com	\N	https://www.milanoflats.com/
e1172682-6a38-49a6-bd1c-aaa85ff7613c	Guido Araya	650 S 1st W	(208) 496-9220	housing@byui.edu	(208) 496-5220	http://www.byui.edu/housing/centre-square
c2fe8486-69d3-477b-9a16-fab2c9d6bb62	Brita Reber	335 W 5th S	(208) 390-3706	managers@thetowerstwo.com	\N	https://www.thetowerstwo.com/
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: amauri
--

COPY public.images (id, slug, "complexId") FROM stdin;
f0816391-f3be-4463-9d81-be67454a8b6f	towers-two-1.jpg	c7b443da-203c-4ef1-9170-d060af69161b
f0816391-f3be-4463-9d81-be67454a8a7f	milano-flats-1.jpg	c7b443da-203c-4ef1-9170-d060af69162b
f0816391-f3be-4463-9d81-be67454a8c7f	spori-villa-1.jpg	44fe8e92-01a8-41f1-804b-adf15af9324e
f0816391-f3be-4463-9d81-be67454a8c3f	centre-square-men-1.jpg	c7794c9e-0430-498b-a68e-4b3b99c9b616
\.


--
-- Name: complexes complexes_name_key; Type: CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.complexes
    ADD CONSTRAINT complexes_name_key UNIQUE (name);


--
-- Name: complexes complexes_pkey; Type: CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.complexes
    ADD CONSTRAINT complexes_pkey PRIMARY KEY (id);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: complexes complexes_contact_fkey; Type: FK CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.complexes
    ADD CONSTRAINT complexes_contact_fkey FOREIGN KEY (contact) REFERENCES public.contacts(id);


--
-- Name: complexes complexes_thumbnail_fkey; Type: FK CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.complexes
    ADD CONSTRAINT complexes_thumbnail_fkey FOREIGN KEY (thumbnail) REFERENCES public.images(id);


--
-- Name: images images_complexId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT "images_complexId_fkey" FOREIGN KEY ("complexId") REFERENCES public.complexes(id);


--
-- PostgreSQL database dump complete
--

