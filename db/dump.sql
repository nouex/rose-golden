--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 12.1

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
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
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
    "parkingSpaces" integer,
    "processingFee" integer,
    "securityDeposit" integer,
    "vacancyStatus" text,
    "wardInfo" text,
    "floorPlans" text,
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
    "hasExtraStorage" boolean
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
-- Name: thumbnails; Type: TABLE; Schema: public; Owner: amauri
--

CREATE TABLE public.thumbnails (
    complex uuid NOT NULL,
    image uuid
);


ALTER TABLE public.thumbnails OWNER TO amauri;

--
-- Data for Name: complexes; Type: TABLE DATA; Schema: public; Owner: amauri
--

COPY public.complexes (id, name, description, "hasPrivateRoom", "hasMusicRoom", "hasWasher", "isHouse", "parkingSpaces", "processingFee", "securityDeposit", "vacancyStatus", "wardInfo", "floorPlans", gender, "minRent", "maxRent", contact, "studentCapacity", "hasHotTub", "hasOfficeCenter", "hasShuttleService", "hasFitnessCenter", "hasCable", "hasAirConditioning", "hasWifi", "isPetFriendly", "hasExtraStorage") FROM stdin;
44fe8e92-01a8-41f1-804b-adf15af9324e	Spori Villa	Very convenient to college (across the street) and to downtown (2 blocks). Remodeled home next to N. side of campus. All utilities included. Plenty of off street parking for tenants. We limit the occupancy to 9 rather than the approved 10 to provide more living space. Free Laundry. Utilities included. High speed wireless included. Sunroom, patio, fire-pit, lawn.	t	f	t	t	10	0	150	\N	\N	\N	M	950	950	db2c6476-4ca3-4f8f-bd31-0ed74be321b7	9	f	f	f	t	t	t	t	t	t
c7794c9e-0430-498b-a68e-4b3b99c9b616	Centre Square (Men)	If you want to live in Zion, this is the place. We listened to your needs/wants and here they are. Extra storage, large kitchen & pantry, wonderful vanities, free washer & dryer in each apartment, study rooms, gathering rooms, music rooms, green space, etc. Come enjoy.	f	t	t	f	130	25	75	\N	\N	\N	M	1399	1499	e1172682-6a38-49a6-bd1c-aaa85ff7613c	220	\N	t	f	f	t	t	t	f	t
c7b443da-203c-4ef1-9170-d060af69162b	Milano Flats	Milano Flats offers all private rooms. Our amenities include a hot tub, two grills, a fitness center, study room with free printing, music room, pool table, fire pits, tanning beds, and more. The apartments include radiant floor heating and a/c units . We have lots of parking if you own a vehicle, if not, we are just a 10 minute walk to most buildings on campus. Come check us out!	t	t	f	f	75	90	125	\N	\N	\N	B	1390	1570	1498ba3f-9521-452f-b9a2-7df5b86c2fc5	150	t	t	f	t	t	t	t	f	\N
c7b443da-203c-4ef1-9170-d060af69161b	Towers Two	Towers Two is the newest premier women's housing at BYUI. Built with you in mind-there is nothing more that you will need! Assigned underground parking,the safety of enclosed hallways,a theater room,a gym,several lounges-providing lots to do! Inside each unit you have the luxury of a washer/dryer,2 fridges,spacious living room,& huge bedrooms. Schedule a tour today to see the beauty for yourself!	f	t	t	f	80	35	75	\N	\N	\N	F	1350	1450	c2fe8486-69d3-477b-9a16-fab2c9d6bb62	90	\N	t	f	t	t	t	t	f	\N
ea78a3a5-fa8a-4d34-ae98-41f5be783831	The Cove	Arbor Cove is truly a one of a kind community. Each apartment has a unique layout with options for large bedrooms, private bathrooms, and large spacious living areas. We are one block from campus, right next to Porter Park, and within walking distance to the grocery store. You can also spend time in our field playing volleyball, soccer, or having a BBQ with your friends!	f	t	t	f	450	50	100	\N	\N	\N	M	1499	1569	8b25ddb0-4845-483d-9759-98f09f8f52fd	224	\N	\N	\N	t	t	t	t	f	\N
14d2c020-c91b-4d60-9faa-f68c0c2c041e	Rose Casa	This is the newest addition to student housing at The Red Door Apartments. Both houses in front of the complex are now available! This price is for a limited time only! Visit thedoors.roomchoice.com to sign a contract.	f	f	t	t	0	70	80	\N	\N	\N	M	995	995	f784d680-0a7a-4bde-abf4-57dc6cd2c813	6	f	f	f	f	\N	\N	t	\N	\N
6d254c21-1dff-4a0f-96d6-baffa72bb501	American Avenue (Men)	At American Avenue we have several apartment layouts for you to make home. We are currently under renovation and things are amazing! Our apartment homes have shared room or private room options next to campus and steps from downtown Rexburg. We offer covered parking and great savings when you sign multi-semester contracts. Right now you can save up to 75! Monthly rates as low as 50/month.	t	\N	t	f	95	75	100	\N	\N	\N	M	1015	1395	6822dfaa-1e37-428e-9c3e-70cf23a64226	86	f	\N	f	\N	\N	\N	t	\N	\N
6de5aa7e-4ef3-410d-b512-4adc29aefd7d	Jordan Ridge	College is about students defining their future. We want to create a living environment that empowers student to do just that. We want to provide a framework for your future. *ALL PRIVATE BEDROOMS* All inclusive: Free laundry (3 Building have W/D in Units, free parking, Wifi live TV, internet, flat screen TV, Fitness center, hot tub, BBQ & more. BEST view in town!	t	\N	t	f	350	80	150	\N	\N	\N	B	1349	1399	eba1efa9-d7c7-49ec-a653-b42df686291d	360	t	t	f	t	\N	t	t	\N	\N
\.


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: amauri
--

COPY public.contacts (id, manager, address, phone, email, fax, website) FROM stdin;
db2c6476-4ca3-4f8f-bd31-0ed74be321b7	Richard Taylor	174 College Ave	(208) 351-8072	taylorr@byui.edu	\N	\N
1498ba3f-9521-452f-b9a2-7df5b86c2fc5	Cami Park	440 S 2nd W	(208) 356-3480	milanoflats@redstoneresidential.com	\N	https://www.milanoflats.com/
e1172682-6a38-49a6-bd1c-aaa85ff7613c	Guido Araya	650 S 1st W	(208) 496-9220	housing@byui.edu	(208) 496-5220	http://www.byui.edu/housing/centre-square
c2fe8486-69d3-477b-9a16-fab2c9d6bb62	Brita Reber	335 W 5th S	(208) 390-3706	managers@thetowerstwo.com	\N	https://www.thetowerstwo.com/
8b25ddb0-4845-483d-9759-98f09f8f52fd	Samantha Andra	220 S 2nd W	(208) 356-8988	leasing@rexburgcove.com	\N	http://rexburgcove.com
f784d680-0a7a-4bde-abf4-57dc6cd2c813	Makayla Lee	135 S 1st E	(208)-356-3001	thereddoorapts@gmail.com	\N	https://thedoors.roomchoice.com/home#sign-up
6822dfaa-1e37-428e-9c3e-70cf23a64226	Danielle Mcguffin	151 S 1st E	(208) 356 5097	manager.americanavenue@gmail.com	\N	https://www.myamericanave.com
eba1efa9-d7c7-49ec-a653-b42df686291d	Elizabeth Towery	291 E 7th S	(208) 359 2221	jordanridge@tritoninv.com	\N	https://www.meet-me-at-the-ridge.com
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
84689c7e-cf3b-46d9-9292-d885bdc40cdc	the-cove-1.jpeg	ea78a3a5-fa8a-4d34-ae98-41f5be783831
e9eef2ad-c7f3-41d6-8980-d47982c0ce4e	the-cove-2.jpeg	ea78a3a5-fa8a-4d34-ae98-41f5be783831
255b8e88-fdc0-4615-9874-b07350115860	the-cove-3.jpeg	ea78a3a5-fa8a-4d34-ae98-41f5be783831
7ba73c59-71f4-4099-b274-9593d4e01515	rose-casa-1.jpeg	14d2c020-c91b-4d60-9faa-f68c0c2c041e
35f05e38-e102-4a5e-9d02-08bc8009d9d6	rose-casa-2.jpeg	14d2c020-c91b-4d60-9faa-f68c0c2c041e
6cc7fc22-a46c-41fa-bd63-2029c22c4a0b	rose-casa-3.jpeg	14d2c020-c91b-4d60-9faa-f68c0c2c041e
5a77d374-570b-4c41-8281-2799b9409f2e	rose-casa-4.jpeg	14d2c020-c91b-4d60-9faa-f68c0c2c041e
02f3a58e-046c-4096-bdb2-20d2e051b0ac	rose-casa-5.jpeg	14d2c020-c91b-4d60-9faa-f68c0c2c041e
e1330e5e-0b23-4065-8042-e80308f27902	rose-casa-6.jpeg	14d2c020-c91b-4d60-9faa-f68c0c2c041e
1ae5cddc-e185-4ede-8ba8-31233bbb921d	rose-casa-7.jpeg	14d2c020-c91b-4d60-9faa-f68c0c2c041e
4eb11330-5802-417e-b9e4-b2a7fd4afe52	american-avenue-men-1.jpeg	6d254c21-1dff-4a0f-96d6-baffa72bb501
aa8b411e-d048-40ac-b6ca-aa7742f1b16c	american-avenue-men-2.jpeg	6d254c21-1dff-4a0f-96d6-baffa72bb501
98dd7ac7-0ddd-4292-80b8-13641b0380d8	american-avenue-men-3.jpeg	6d254c21-1dff-4a0f-96d6-baffa72bb501
ff49a8c7-426f-455b-8a8b-1fd0ecf3c3f1	american-avenue-men-4.jpeg	6d254c21-1dff-4a0f-96d6-baffa72bb501
48ebaf8f-ec82-47d2-89bf-8e266efc39ae	american-avenue-men-5.jpeg	6d254c21-1dff-4a0f-96d6-baffa72bb501
e1ec8f00-55b5-4898-aacc-ea2f26d5ae59	american-avenue-men-6.jpeg	6d254c21-1dff-4a0f-96d6-baffa72bb501
8f170d46-7c8b-4281-86b8-8f521f14fcb0	american-avenue-men-7.jpeg	6d254c21-1dff-4a0f-96d6-baffa72bb501
e888fa53-3437-4489-b64d-32c520ce97ad	american-avenue-men-8.jpeg	6d254c21-1dff-4a0f-96d6-baffa72bb501
fdbbd408-335c-42eb-a576-45d531ef23aa	jordan-ridge-1.jpeg	6de5aa7e-4ef3-410d-b512-4adc29aefd7d
07e3b8d8-d9e8-4e06-a885-9dd4daea6897	jordan-ridge-2.jpeg	6de5aa7e-4ef3-410d-b512-4adc29aefd7d
b5f6321b-6835-4ee1-9a2e-4a8ad18166f0	jordan-ridge-3.jpeg	6de5aa7e-4ef3-410d-b512-4adc29aefd7d
2a2109aa-95bf-4e4a-a64b-044e4b146a3b	jordan-ridge-4.jpeg	6de5aa7e-4ef3-410d-b512-4adc29aefd7d
04b3205a-2851-4e67-b60e-27502ba5e0bc	jordan-ridge-5.jpeg	6de5aa7e-4ef3-410d-b512-4adc29aefd7d
4679dfea-2076-4b9d-9f26-80a366a012a2	jordan-ridge-6.jpeg	6de5aa7e-4ef3-410d-b512-4adc29aefd7d
673098f7-82f8-487d-a860-dc96327f73b1	jordan-ridge-7.jpeg	6de5aa7e-4ef3-410d-b512-4adc29aefd7d
2408fc4b-f7c7-4c53-ad05-d5663b4a777c	jordan-ridge-8.jpeg	6de5aa7e-4ef3-410d-b512-4adc29aefd7d
9b9b0427-dff1-48c7-af9c-a5e09357b8f4	jordan-ridge-9.jpeg	6de5aa7e-4ef3-410d-b512-4adc29aefd7d
\.


--
-- Data for Name: thumbnails; Type: TABLE DATA; Schema: public; Owner: amauri
--

COPY public.thumbnails (complex, image) FROM stdin;
44fe8e92-01a8-41f1-804b-adf15af9324e	5a02ae83-79c1-4c1c-a6ca-3fd2dadc8fc0
c7794c9e-0430-498b-a68e-4b3b99c9b616	a5faaf0c-a8c7-4ba7-ad8d-d8b9f17df4db
c7b443da-203c-4ef1-9170-d060af69161b	7351aea3-ec1f-4561-92e9-6d1bc86bf072
c7b443da-203c-4ef1-9170-d060af69162b	92c2dcb0-df33-49f7-bd63-b3c724546467
ea78a3a5-fa8a-4d34-ae98-41f5be783831	e9eef2ad-c7f3-41d6-8980-d47982c0ce4e
14d2c020-c91b-4d60-9faa-f68c0c2c041e	7ba73c59-71f4-4099-b274-9593d4e01515
6d254c21-1dff-4a0f-96d6-baffa72bb501	4eb11330-5802-417e-b9e4-b2a7fd4afe52
6de5aa7e-4ef3-410d-b512-4adc29aefd7d	fdbbd408-335c-42eb-a576-45d531ef23aa
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
-- Name: thumbnails thumbnails_pkey; Type: CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.thumbnails
    ADD CONSTRAINT thumbnails_pkey PRIMARY KEY (complex);


--
-- Name: complexes complexes_contact_fkey; Type: FK CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.complexes
    ADD CONSTRAINT complexes_contact_fkey FOREIGN KEY (contact) REFERENCES public.contacts(id);


--
-- Name: images images_complexId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT "images_complexId_fkey" FOREIGN KEY ("complexId") REFERENCES public.complexes(id);


--
-- Name: thumbnails thumbnails_complex_fkey; Type: FK CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.thumbnails
    ADD CONSTRAINT thumbnails_complex_fkey FOREIGN KEY (complex) REFERENCES public.complexes(id);


--
-- Name: thumbnails thumbnails_image_fkey; Type: FK CONSTRAINT; Schema: public; Owner: amauri
--

ALTER TABLE ONLY public.thumbnails
    ADD CONSTRAINT thumbnails_image_fkey FOREIGN KEY (image) REFERENCES public.images(id);


--
-- PostgreSQL database dump complete
--

