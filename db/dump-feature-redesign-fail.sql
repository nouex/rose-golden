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
-- Name: feature_type; Type: TYPE; Schema: public; Owner: amauri
--

CREATE TYPE public.feature_type AS ENUM (
    'parking',
    'unique_features',
    'services',
    'fitness_and_recreation',
    'security',
    'general',
    'pet_policy'
);


ALTER TYPE public.feature_type OWNER TO amauri;

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
    "studentCapacity" integer,
    "hasHotTub" boolean,
    "hasOfficeCenter" boolean,
    "hasShuttleService" boolean,
    "hasFitnessCenter" boolean,
    "hasCable" boolean,
    "hasAirConditioning" boolean,
    "hasWifi" boolean,
    "isPetFriendly" boolean,
    "hasExtraStorage" boolean,
    features uuid
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
-- Name: features; Type: TABLE; Schema: public; Owner: amauri
--

CREATE TABLE public.features (
    "hasPrivateRoom" boolean,
    "hasMusicRoom" boolean,
    "hasWasher" boolean,
    "isHouse" boolean,
    "hasHotTub" boolean,
    "hasOfficeCenter" boolean,
    "hasShuttleService" boolean,
    "hasFitnessCenter" boolean,
    "hasCable" boolean,
    "hasAirConditioning" boolean,
    "hasWifi" boolean,
    "isPetFriendly" boolean,
    "hasExtraStorage" boolean,
    id uuid NOT NULL,
    type public.feature_type
);


ALTER TABLE public.features OWNER TO amauri;

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

COPY public.complexes (id, name, description, "hasPrivateRoom", "hasMusicRoom", "hasWasher", "isHouse", "parkingSpaces", "processingFee", "securityDeposit", "vacancyStatus", "wardInfo", "floorPlans", thumbnail, gender, "minRent", "maxRent", contact, "studentCapacity", "hasHotTub", "hasOfficeCenter", "hasShuttleService", "hasFitnessCenter", "hasCable", "hasAirConditioning", "hasWifi", "isPetFriendly", "hasExtraStorage", features) FROM stdin;
c7b443da-203c-4ef1-9170-d060af69161b	Towers Two	\N	f	t	t	f	80	\N	\N	\N	\N	\N	7351aea3-ec1f-4561-92e9-6d1bc86bf072	F	1350	1450	c2fe8486-69d3-477b-9a16-fab2c9d6bb62	90	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
c7b443da-203c-4ef1-9170-d060af69162b	Milano Flats	\N	t	t	f	f	75	\N	\N	\N	\N	\N	92c2dcb0-df33-49f7-bd63-b3c724546467	B	1390	1570	1498ba3f-9521-452f-b9a2-7df5b86c2fc5	150	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
c7794c9e-0430-498b-a68e-4b3b99c9b616	Centre Square (Men)	\N	f	t	t	f	130	\N	\N	\N	\N	\N	a5faaf0c-a8c7-4ba7-ad8d-d8b9f17df4db	M	1399	1499	e1172682-6a38-49a6-bd1c-aaa85ff7613c	220	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
44fe8e92-01a8-41f1-804b-adf15af9324e	Spori Villa	\N	t	t	t	t	10	\N	\N	\N	\N	\N	5a02ae83-79c1-4c1c-a6ca-3fd2dadc8fc0	M	950	950	db2c6476-4ca3-4f8f-bd31-0ed74be321b7	9	t	t	t	t	t	t	t	t	t	2e13c60e-1991-414b-af83-9f22cf6583bb
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
-- Data for Name: features; Type: TABLE DATA; Schema: public; Owner: amauri
--

COPY public.features ("hasPrivateRoom", "hasMusicRoom", "hasWasher", "isHouse", "hasHotTub", "hasOfficeCenter", "hasShuttleService", "hasFitnessCenter", "hasCable", "hasAirConditioning", "hasWifi", "isPetFriendly", "hasExtraStorage", id, type) FROM stdin;
t	t	t	t	t	t	t	t	t	t	t	t	t	2e13c60e-1991-414b-af83-9f22cf6583bb	\N
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: amauri
--

COPY public.images (id, slug, "complexId") FROM stdin;
92c2dcb0-df33-49f7-bd63-b3c724546467	milano-flats-1.jpeg	c7b443da-203c-4ef1-9170-d060af69162b
8d431763-311f-47c5-b8de-631ac6538233	milano-flats-2.jpeg	c7b443da-203c-4ef1-9170-d060af69162b
3de50c6b-f608-47e0-8968-da3dd509a8ce	milano-flats-3.jpeg	c7b443da-203c-4ef1-9170-d060af69162b
f1d8da43-f055-4c79-8c73-280c06380e5b	milano-flats-4.jpeg	c7b443da-203c-4ef1-9170-d060af69162b
aa6d12aa-f709-467b-a382-7f244e05dee4	milano-flats-5.jpeg	c7b443da-203c-4ef1-9170-d060af69162b
fe4f54dd-3408-4b7f-b4f8-d01469ccad0a	milano-flats-6.jpeg	c7b443da-203c-4ef1-9170-d060af69162b
269bd7fa-3223-4d92-a237-b89af2a59c30	milano-flats-7.jpeg	c7b443da-203c-4ef1-9170-d060af69162b
7de9aec2-f2d4-451a-b1a1-220690c71164	milano-flats-8.jpeg	c7b443da-203c-4ef1-9170-d060af69162b
ab0c857d-2cd7-4260-935f-14f1f5e40c25	milano-flats-9.jpeg	c7b443da-203c-4ef1-9170-d060af69162b
7351aea3-ec1f-4561-92e9-6d1bc86bf072	towers-two-1.jpg	c7b443da-203c-4ef1-9170-d060af69161b
4ec803f8-2b33-41bc-b900-a623b95fec4c	towers-two-10.jpg	c7b443da-203c-4ef1-9170-d060af69161b
e4cc6faa-59a8-4b88-8fc4-2e77b13649e9	towers-two-11.jpg	c7b443da-203c-4ef1-9170-d060af69161b
c73dec1b-744e-42cd-aa26-efa0eabe8a2c	towers-two-12.jpg	c7b443da-203c-4ef1-9170-d060af69161b
29f7b1fd-ba30-4638-8375-7fb144952391	towers-two-2.jpg	c7b443da-203c-4ef1-9170-d060af69161b
0d6ef76d-7cb7-4cd3-83b1-cce9adf37bee	towers-two-3.jpg	c7b443da-203c-4ef1-9170-d060af69161b
65470b80-69e9-4707-a180-ebeae7708e23	towers-two-4.jpg	c7b443da-203c-4ef1-9170-d060af69161b
72add22d-391c-4638-9ced-5d03eb909a13	towers-two-5.jpg	c7b443da-203c-4ef1-9170-d060af69161b
c75a0af6-68f0-4659-9dec-b50d7c9456a4	towers-two-6.jpg	c7b443da-203c-4ef1-9170-d060af69161b
7ca7afdf-9621-4e7d-baf6-f66a0ad5230c	towers-two-7.jpg	c7b443da-203c-4ef1-9170-d060af69161b
59a25f23-416b-4bae-ad76-24f83d34de9e	towers-two-8.jpg	c7b443da-203c-4ef1-9170-d060af69161b
7604cf59-7fb0-4b91-89c2-140c4ed8b149	towers-two-9.jpg	c7b443da-203c-4ef1-9170-d060af69161b
5a02ae83-79c1-4c1c-a6ca-3fd2dadc8fc0	spori-villa-1.jpg	44fe8e92-01a8-41f1-804b-adf15af9324e
b11883ae-7a08-40cf-a9cc-dd6ec14e5d4e	spori-villa-2.jpg	44fe8e92-01a8-41f1-804b-adf15af9324e
a5faaf0c-a8c7-4ba7-ad8d-d8b9f17df4db	centre-square-men-1.jpg	c7794c9e-0430-498b-a68e-4b3b99c9b616
20ebc87a-7b7c-43f3-895e-a79ac4a1c938	centre-square-men-2.jpg	c7794c9e-0430-498b-a68e-4b3b99c9b616
c5c8aee0-ca01-42d6-a5d4-8a0ae091d231	centre-square-men-3.jpg	c7794c9e-0430-498b-a68e-4b3b99c9b616
7074412f-0b83-4962-bee8-70e545db4d36	centre-square-men-4.jpg	c7794c9e-0430-498b-a68e-4b3b99c9b616
535123cf-2268-448a-9ade-a7c07cf62dc1	centre-square-men-5.jpg	c7794c9e-0430-498b-a68e-4b3b99c9b616
6bcb2544-eef2-4853-986c-67cb412ac39c	centre-square-men-6.jpg	c7794c9e-0430-498b-a68e-4b3b99c9b616
813a53d1-9ed8-47d4-a3e6-93b574cbd404	centre-square-men-7.jpg	c7794c9e-0430-498b-a68e-4b3b99c9b616
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
-- Name: features features_pkey; Type: CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_pkey PRIMARY KEY (id);


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
-- Name: complexes complexes_features_fkey; Type: FK CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.complexes
    ADD CONSTRAINT complexes_features_fkey FOREIGN KEY (features) REFERENCES public.features(id);


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

