import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import { Divider } from "@chakra-ui/react";

export default function Home() {
    return (
        <React.Fragment>
            <Layout>
                <About id="about-me" my="4" />
                <Divider maxW="md" mx="auto" />
                <Contact id="contact" my="4" />
                <Divider maxW="md" mx="auto" />
                <Resume id="resume" />
            </Layout>
        </React.Fragment>
    );
}
