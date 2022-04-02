import React from "react";
import NextLink from "next/link";
import { Button, LinkOverlay } from "@chakra-ui/react";

export default function NavLinks() {
    return (
        <React.Fragment>
            <Button
                display="block"
                fontSize="lg"
                fontWeight="normal"
                ml={{ base: 0, md: 2 }}
                mx={{ base: "auto" }}
                variant="ghost"
            >
                <NextLink href="#about-me" passHref>
                    <LinkOverlay>About Me</LinkOverlay>
                </NextLink>
            </Button>
            <Button
                display="block"
                fontSize="lg"
                fontWeight="normal"
                ml={{ base: 0, md: 2 }}
                mx={{ base: "auto" }}
                variant="ghost"
            >
                <LinkOverlay href="#contact">Contact</LinkOverlay>
            </Button>
            <Button
                display="block"
                fontSize="lg"
                fontWeight="normal"
                ml={{ base: 0, md: 2 }}
                mx={{ base: "auto" }}
                variant="ghost"
            >
                <LinkOverlay href="#resume">Resume</LinkOverlay>
            </Button>
        </React.Fragment>
    );
}
