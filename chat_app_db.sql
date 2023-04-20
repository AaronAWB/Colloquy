--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: channel5; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.channel5 (
    "Id" integer NOT NULL,
    "UserId" integer,
    "Message" text,
    "CreatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.channel5 OWNER TO postgres;

--
-- Name: channel5_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."channel5_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."channel5_Id_seq" OWNER TO postgres;

--
-- Name: channel5_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."channel5_Id_seq" OWNED BY public.channel5."Id";


--
-- Name: channels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.channels (
    "Id" integer NOT NULL,
    "ChannelName" character varying(15) NOT NULL,
    "CreatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.channels OWNER TO postgres;

--
-- Name: channels_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."channels_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."channels_Id_seq" OWNER TO postgres;

--
-- Name: channels_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."channels_Id_seq" OWNED BY public.channels."Id";


--
-- Name: discussion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.discussion (
    "Id" integer NOT NULL,
    "UserId" integer,
    "Message" text,
    "CreatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.discussion OWNER TO postgres;

--
-- Name: discussion_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."discussion_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."discussion_Id_seq" OWNER TO postgres;

--
-- Name: discussion_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."discussion_Id_seq" OWNED BY public.discussion."Id";


--
-- Name: general; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.general (
    "Id" integer NOT NULL,
    "UserId" integer,
    "Message" text,
    "CreatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.general OWNER TO postgres;

--
-- Name: general_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."general_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."general_Id_seq" OWNER TO postgres;

--
-- Name: general_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."general_Id_seq" OWNED BY public.general."Id";


--
-- Name: random; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.random (
    "Id" integer NOT NULL,
    "UserId" integer,
    "Message" text,
    "CreatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.random OWNER TO postgres;

--
-- Name: random_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."random_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."random_Id_seq" OWNER TO postgres;

--
-- Name: random_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."random_Id_seq" OWNED BY public.random."Id";


--
-- Name: simultaneous; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.simultaneous (
    "Id" integer NOT NULL,
    "UserId" integer,
    "Message" text,
    "CreatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.simultaneous OWNER TO postgres;

--
-- Name: simultaneous_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."simultaneous_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."simultaneous_Id_seq" OWNER TO postgres;

--
-- Name: simultaneous_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."simultaneous_Id_seq" OWNED BY public.simultaneous."Id";


--
-- Name: test; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.test (
    "Id" integer NOT NULL,
    "UserId" integer,
    "Message" text,
    "CreatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.test OWNER TO postgres;

--
-- Name: test_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."test_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."test_Id_seq" OWNER TO postgres;

--
-- Name: test_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."test_Id_seq" OWNED BY public.test."Id";


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    "Id" integer NOT NULL,
    "Username" character varying(12) NOT NULL,
    "Password" character varying NOT NULL,
    "CreatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."users_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."users_Id_seq" OWNER TO postgres;

--
-- Name: users_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."users_Id_seq" OWNED BY public.users."Id";


--
-- Name: channel5 Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.channel5 ALTER COLUMN "Id" SET DEFAULT nextval('public."channel5_Id_seq"'::regclass);


--
-- Name: channels Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.channels ALTER COLUMN "Id" SET DEFAULT nextval('public."channels_Id_seq"'::regclass);


--
-- Name: discussion Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion ALTER COLUMN "Id" SET DEFAULT nextval('public."discussion_Id_seq"'::regclass);


--
-- Name: general Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.general ALTER COLUMN "Id" SET DEFAULT nextval('public."general_Id_seq"'::regclass);


--
-- Name: random Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.random ALTER COLUMN "Id" SET DEFAULT nextval('public."random_Id_seq"'::regclass);


--
-- Name: simultaneous Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.simultaneous ALTER COLUMN "Id" SET DEFAULT nextval('public."simultaneous_Id_seq"'::regclass);


--
-- Name: test Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test ALTER COLUMN "Id" SET DEFAULT nextval('public."test_Id_seq"'::regclass);


--
-- Name: users Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN "Id" SET DEFAULT nextval('public."users_Id_seq"'::regclass);


--
-- Data for Name: channel5; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.channel5 ("Id", "UserId", "Message", "CreatedAt") FROM stdin;
1	9	Still just testing.	2023-04-16 16:19:01.512731-07
2	9	This is actually pretty cool, I gotta say.	2023-04-16 16:19:15.450708-07
3	5	Testing the date divider again.	2023-04-17 08:38:28.583925-07
4	7	First simultaneous test!	2023-04-17 08:41:53.684592-07
5	7	Here's one test.	2023-04-17 21:47:10.029801-07
6	5	Here's another	2023-04-17 21:47:14.333364-07
7	7	Yeah, see, now it's working	2023-04-17 21:47:24.994809-07
8	7	The problem is that the user is not joining the room until after the first message is sent. Need to find a solution for that.	2023-04-17 21:47:59.739126-07
9	5	Yeah. Probably need to add a join room even listener in the channel list component.	2023-04-17 21:49:02.711614-07
10	5	I am typing this in channel 5.	2023-04-18 20:24:24.794799-07
\.


--
-- Data for Name: channels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.channels ("Id", "ChannelName", "CreatedAt") FROM stdin;
2	General	2023-03-19 12:22:07.486631-07
3	Random	2023-03-19 12:23:11.857988-07
4	Test	2023-04-14 20:54:44.775601-07
46	Discussion	2023-04-15 23:40:40.853904-07
47	Channel5	2023-04-16 16:18:52.161287-07
48	Simultaneous	2023-04-17 08:42:22.44098-07
\.


--
-- Data for Name: discussion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.discussion ("Id", "UserId", "Message", "CreatedAt") FROM stdin;
1	5	Testing the discussion channel.	2023-04-15 23:40:58.946072-07
\.


--
-- Data for Name: general; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.general ("Id", "UserId", "Message", "CreatedAt") FROM stdin;
79	5	sdf	2023-04-12 20:52:53.764348-07
80	5	Second test.	2023-04-12 21:03:33.713411-07
81	5	Manual test two.	2023-04-12 21:07:59.94196-07
82	5	This is a new message!	2023-04-12 21:15:58.992009-07
83	5	Why?	2023-04-12 21:18:17.806045-07
84	5	Huh?	2023-04-12 21:18:38.116882-07
85	5	This works now!!!1	2023-04-12 22:05:06.910934-07
86	5	But does it really??	2023-04-12 22:05:14.559036-07
87	5	Yes!!!	2023-04-12 22:05:18.282157-07
88	7	Here is the last test	2023-04-12 22:06:21.451015-07
89	7	It worked!!	2023-04-12 22:06:26.694628-07
90	5	Check this out!	2023-04-13 19:57:18.04941-07
91	5	Cool!	2023-04-13 19:57:26.692266-07
92	5	Hmm, that did not work...	2023-04-13 20:00:07.41899-07
93	5	Wait... what?	2023-04-13 20:00:07.431333-07
94	5	Oh, nvm, it worked	2023-04-13 20:00:19.216856-07
95	5	Nice!	2023-04-13 20:32:00.913348-07
96	5	This scrolls to the bottom now!	2023-04-13 20:32:17.085822-07
97	5	What if I have a super long message like this one that is going to wrap around and be more like a paragraph? Will it Work? Is there any kind of limit? Hard to say! This will certainly be a test.	2023-04-13 20:39:54.053233-07
98	7	Here is more contrast for testing...	2023-04-15 13:25:51.824309-07
99	5	Testing the date feature. Will it work now?	2023-04-16 11:53:20.752989-07
100	5	So why did it not show up this time?	2023-04-16 11:53:35.714767-07
101	9	Here's another test message. This one is pretty long to test length. It is helpful to make sure longer messages are going to fit and not cause an issue.	2023-04-16 16:17:43.565147-07
102	5	Why?	2023-04-16 18:41:20.339301-07
103	5	Cool, this submit message on pressing the return key works now.	2023-04-16 18:41:41.352317-07
104	7	Note - need to make sure that socket event is only being emitted to the correct channel. Otherwise message will show up in whatever channel the other users happen to have open.	2023-04-17 08:45:37.63612-07
105	5	Testing rooms...	2023-04-17 21:25:49.501925-07
106	5	Hello.	2023-04-17 21:37:46.421658-07
107	7	Testing to make sure it works before a channel is changed.	2023-04-18 20:27:14.148298-07
108	5	Testing again to make sure it joins the first channel on render now.	2023-04-18 20:30:27.411751-07
109	5	Testing again	2023-04-18 20:34:23.183062-07
110	5	One more test	2023-04-18 20:34:39.53546-07
111	5	What did I do wrong?	2023-04-18 20:34:53.855599-07
112	5	Okay, what is not working now?	2023-04-18 20:35:19.712764-07
113	5	Test	2023-04-18 20:36:31.026441-07
114	7	Alright, let's see how we do this time.	2023-04-18 20:53:32.008409-07
46	5	Testing!	2023-04-11 20:31:18.880175-07
47	5	Second test.	2023-04-11 20:32:29.331796-07
48	5	Third test.	2023-04-11 20:42:20.749674-07
49	5	sdf	2023-04-11 20:42:29.56976-07
50	5	Testing!	2023-04-11 20:56:01.046462-07
51	5	Hello.	2023-04-11 20:58:41.26062-07
52	5	Testing!	2023-04-11 21:03:14.200817-07
53	5	Third test.	2023-04-11 21:04:01.008014-07
54	5	Testing!	2023-04-11 21:08:32.799166-07
55	5	Third test.	2023-04-11 21:10:16.767271-07
56	5	This is cool!	2023-04-11 21:10:50.853493-07
57	5	Nice!!!!	2023-04-11 21:10:55.601324-07
115	7	Wait... what? Why did it not show up here?	2023-04-18 20:53:51.881347-07
116	7	Did that fix it?	2023-04-18 20:54:08.67972-07
117	7	What about now?	2023-04-18 20:54:52.186469-07
118	7	Testing	2023-04-18 20:55:07.25869-07
62	5	Hello-internal	2023-04-11 21:29:29.934635-07
119	5	Okay, so I guess it had just not refreshed that with that change yet.	2023-04-18 20:55:26.696458-07
120	5	Okay, one more test to make sure this is working right on first render.	2023-04-18 20:59:27.27472-07
\.


--
-- Data for Name: random; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.random ("Id", "UserId", "Message", "CreatedAt") FROM stdin;
1	5	Here's the first message in the Random channel!!	2023-04-11 21:11:18.448985-07
2	5	Another random test.	2023-04-17 21:39:01.859004-07
\.


--
-- Data for Name: simultaneous; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.simultaneous ("Id", "UserId", "Message", "CreatedAt") FROM stdin;
1	7	I just added this channel and it showed up simultaneously on the other screen!	2023-04-17 08:42:51.060048-07
2	7	Alright... testing this again!	2023-04-17 21:31:13.613819-07
3	5	Test of the new font weight.	2023-04-18 21:20:56.732469-07
\.


--
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.test ("Id", "UserId", "Message", "CreatedAt") FROM stdin;
1	5	Can I write anything to the Test channel?	2023-04-14 20:57:46.766044-07
2	5	Second test.	2023-04-14 20:57:56.724519-07
3	5	Nice!	2023-04-15 12:01:25.847843-07
4	5	Should be working now.	2023-04-15 12:01:42.403776-07
5	7	This is another room test!	2023-04-17 21:26:14.316611-07
6	7	Now we're both in the same room!	2023-04-17 21:26:33.048811-07
7	7	Can you see this?	2023-04-17 21:44:12.636317-07
8	7	This is testing to see if the rooms work now.	2023-04-18 20:23:55.45489-07
9	5	Confirming that rooms work now.	2023-04-18 20:24:08.920519-07
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users ("Id", "Username", "Password", "CreatedAt") FROM stdin;
5	AaronAWB	TestPassword	2023-03-24 18:17:38.464335-07
6	Guest	GuestPwd	2023-03-27 19:24:43.259885-07
7	TestUser	123456	2023-03-30 20:57:41.124647-07
9	Zerosmachina	ZPass	2023-04-16 16:16:35.101138-07
\.


--
-- Name: channel5_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."channel5_Id_seq"', 10, true);


--
-- Name: channels_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."channels_Id_seq"', 48, true);


--
-- Name: discussion_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."discussion_Id_seq"', 1, true);


--
-- Name: general_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."general_Id_seq"', 120, true);


--
-- Name: random_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."random_Id_seq"', 2, true);


--
-- Name: simultaneous_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."simultaneous_Id_seq"', 3, true);


--
-- Name: test_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."test_Id_seq"', 9, true);


--
-- Name: users_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."users_Id_seq"', 9, true);


--
-- Name: channel5 channel5_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.channel5
    ADD CONSTRAINT channel5_pkey PRIMARY KEY ("Id");


--
-- Name: channels channels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.channels
    ADD CONSTRAINT channels_pkey PRIMARY KEY ("Id");


--
-- Name: discussion discussion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion
    ADD CONSTRAINT discussion_pkey PRIMARY KEY ("Id");


--
-- Name: general general_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.general
    ADD CONSTRAINT general_pkey PRIMARY KEY ("Id");


--
-- Name: random random_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.random
    ADD CONSTRAINT random_pkey PRIMARY KEY ("Id");


--
-- Name: simultaneous simultaneous_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.simultaneous
    ADD CONSTRAINT simultaneous_pkey PRIMARY KEY ("Id");


--
-- Name: test test_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pkey PRIMARY KEY ("Id");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("Id");


--
-- Name: channel5 channel5_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.channel5
    ADD CONSTRAINT "channel5_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users("Id");


--
-- Name: discussion discussion_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion
    ADD CONSTRAINT "discussion_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users("Id");


--
-- Name: general general_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.general
    ADD CONSTRAINT "general_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users("Id");


--
-- Name: random random_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.random
    ADD CONSTRAINT "random_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users("Id");


--
-- Name: simultaneous simultaneous_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.simultaneous
    ADD CONSTRAINT "simultaneous_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users("Id");


--
-- Name: test test_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT "test_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users("Id");


--
-- PostgreSQL database dump complete
--

