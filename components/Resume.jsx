import React from "react";
import { Container } from "@chakra-ui/react";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Leadership from "./Leadership";
import Honors from "./Honors";

export default function Resume() {
    return (
        <React.Fragment>
            <Container id="resume" maxW="container.md" py="8">
                <Education />
                <Skills />
                <Experience />
                <Projects />
                <Leadership />
                <Honors />
            </Container>
        </React.Fragment>
    );
}
