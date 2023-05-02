--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.1

-- Started on 2023-04-19 21:42:40 PDT

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
-- TOC entry 227 (class 1259 OID 17367)
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
-- TOC entry 226 (class 1259 OID 17366)
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
-- TOC entry 3681 (class 0 OID 0)
-- Dependencies: 226
-- Name: channel5_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."channel5_Id_seq" OWNED BY public.channel5."Id";


--
-- TOC entry 217 (class 1259 OID 16536)
-- Name: channels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.channels (
    "Id" integer NOT NULL,
    "ChannelName" character varying(15) NOT NULL,
    "CreatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.channels OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16535)
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
-- TOC entry 3682 (class 0 OID 0)
-- Dependencies: 216
-- Name: channels_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."channels_Id_seq" OWNED BY public.channels."Id";


--
-- TOC entry 225 (class 1259 OID 17346)
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
-- TOC entry 224 (class 1259 OID 17345)
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
-- TOC entry 3683 (class 0 OID 0)
-- Dependencies: 224
-- Name: discussion_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."discussion_Id_seq" OWNED BY public.discussion."Id";


--
-- TOC entry 219 (class 1259 OID 16690)
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
-- TOC entry 218 (class 1259 OID 16689)
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
-- TOC entry 3684 (class 0 OID 0)
-- Dependencies: 218
-- Name: general_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."general_Id_seq" OWNED BY public.general."Id";


--
-- TOC entry 221 (class 1259 OID 16705)
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
-- TOC entry 220 (class 1259 OID 16704)
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
-- TOC entry 3685 (class 0 OID 0)
-- Dependencies: 220
-- Name: random_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."random_Id_seq" OWNED BY public.random."Id";


--
-- TOC entry 229 (class 1259 OID 17382)
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
-- TOC entry 228 (class 1259 OID 17381)
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
-- TOC entry 3686 (class 0 OID 0)
-- Dependencies: 228
-- Name: simultaneous_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."simultaneous_Id_seq" OWNED BY public.simultaneous."Id";


--
-- TOC entry 223 (class 1259 OID 16725)
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
-- TOC entry 222 (class 1259 OID 16724)
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
-- TOC entry 3687 (class 0 OID 0)
-- Dependencies: 222
-- Name: test_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."test_Id_seq" OWNED BY public.test."Id";


--
-- TOC entry 215 (class 1259 OID 16449)
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
-- TOC entry 214 (class 1259 OID 16448)
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
-- TOC entry 3688 (class 0 OID 0)
-- Dependencies: 214
-- Name: users_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."users_Id_seq" OWNED BY public.users."Id";


--
-- TOC entry 3508 (class 2604 OID 17370)
-- Name: channel5 Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.channel5 ALTER COLUMN "Id" SET DEFAULT nextval('public."channel5_Id_seq"'::regclass);


--
-- TOC entry 3498 (class 2604 OID 16539)
-- Name: channels Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.channels ALTER COLUMN "Id" SET DEFAULT nextval('public."channels_Id_seq"'::regclass);


--
-- TOC entry 3506 (class 2604 OID 17349)
-- Name: discussion Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion ALTER COLUMN "Id" SET DEFAULT nextval('public."discussion_Id_seq"'::regclass);


--
-- TOC entry 3500 (class 2604 OID 16693)
-- Name: general Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.general ALTER COLUMN "Id" SET DEFAULT nextval('public."general_Id_seq"'::regclass);


--
-- TOC entry 3502 (class 2604 OID 16708)
-- Name: random Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.random ALTER COLUMN "Id" SET DEFAULT nextval('public."random_Id_seq"'::regclass);


--
-- TOC entry 3510 (class 2604 OID 17385)
-- Name: simultaneous Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.simultaneous ALTER COLUMN "Id" SET DEFAULT nextval('public."simultaneous_Id_seq"'::regclass);


--
-- TOC entry 3504 (class 2604 OID 16728)
-- Name: test Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test ALTER COLUMN "Id" SET DEFAULT nextval('public."test_Id_seq"'::regclass);


--
-- TOC entry 3496 (class 2604 OID 16452)
-- Name: users Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN "Id" SET DEFAULT nextval('public."users_Id_seq"'::regclass);


--
-- TOC entry 3525 (class 2606 OID 17375)
-- Name: channel5 channel5_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.channel5
    ADD CONSTRAINT channel5_pkey PRIMARY KEY ("Id");


--
-- TOC entry 3515 (class 2606 OID 16544)
-- Name: channels channels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.channels
    ADD CONSTRAINT channels_pkey PRIMARY KEY ("Id");


--
-- TOC entry 3523 (class 2606 OID 17354)
-- Name: discussion discussion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion
    ADD CONSTRAINT discussion_pkey PRIMARY KEY ("Id");


--
-- TOC entry 3517 (class 2606 OID 16698)
-- Name: general general_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.general
    ADD CONSTRAINT general_pkey PRIMARY KEY ("Id");


--
-- TOC entry 3519 (class 2606 OID 16713)
-- Name: random random_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.random
    ADD CONSTRAINT random_pkey PRIMARY KEY ("Id");


--
-- TOC entry 3527 (class 2606 OID 17390)
-- Name: simultaneous simultaneous_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.simultaneous
    ADD CONSTRAINT simultaneous_pkey PRIMARY KEY ("Id");


--
-- TOC entry 3521 (class 2606 OID 16733)
-- Name: test test_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pkey PRIMARY KEY ("Id");


--
-- TOC entry 3513 (class 2606 OID 16456)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("Id");


--
-- TOC entry 3532 (class 2606 OID 17376)
-- Name: channel5 channel5_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.channel5
    ADD CONSTRAINT "channel5_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users("Id");


--
-- TOC entry 3531 (class 2606 OID 17355)
-- Name: discussion discussion_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion
    ADD CONSTRAINT "discussion_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users("Id");


--
-- TOC entry 3528 (class 2606 OID 16699)
-- Name: general general_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.general
    ADD CONSTRAINT "general_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users("Id");


--
-- TOC entry 3529 (class 2606 OID 16714)
-- Name: random random_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.random
    ADD CONSTRAINT "random_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users("Id");


--
-- TOC entry 3533 (class 2606 OID 17391)
-- Name: simultaneous simultaneous_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.simultaneous
    ADD CONSTRAINT "simultaneous_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users("Id");


--
-- TOC entry 3530 (class 2606 OID 16734)
-- Name: test test_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT "test_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users("Id");


-- Completed on 2023-04-19 21:42:40 PDT

--
-- PostgreSQL database dump complete
--

