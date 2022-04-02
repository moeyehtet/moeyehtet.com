import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import { Divider, useMediaQuery } from "@chakra-ui/react";

export default function Home() {
    return (
        <React.Fragment>
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
