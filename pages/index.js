import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import { Divider } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
    return (
        <React.Fragment>
            <Head>
                <title>Moe Ye Htet</title>
                <meta
                    name="description"
                    content="Moe Ye Htet's Personal Website"
                />
                <meta property="og:title" content="Moe Ye Htet" />
                <meta
                    property="og:description"
                    content="Moe Ye Htet's Personal Website"
                />
                <meta property="og:url" content="https://moeyehtet.com" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <About my="4" />
                <Divider maxW="md" mx="auto" />
                <Contact my="4" />
                <Divider maxW="md" mx="auto" />
                <Resume id="resume" />
            </Layout>
        </React.Fragment>
    );
}
