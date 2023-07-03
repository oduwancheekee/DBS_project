--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Ubuntu 15.3-1.pgdg22.04+1)
-- Dumped by pg_dump version 15.3 (Ubuntu 15.3-1.pgdg22.04+1)

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
-- Name: testtable; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.testtable (
    col1 integer,
    col2 character varying(3)
);


ALTER TABLE public.testtable OWNER TO postgres;

--
-- Data for Name: testtable; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.testtable (col1, col2) FROM stdin;
12	asd
3	tre
2	two
\.


--
-- Name: TABLE testtable; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.testtable TO oduwan;


--
-- PostgreSQL database dump complete
--

