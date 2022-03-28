import React from "react";
import NextLink from "next/link";
import {
    Container,
    Flex,
    Heading,
    Text,
    Link,
    LinkOverlay,
    Center,
    Spacer,
    Button,
} from "@chakra-ui/react";

export default function Navbar() {
    return (
        <React.Fragment>
            <Flex
                as="header"
                sx={{
                    position: "-webkit-sticky",
                    position: "sticky",
                    top: "0",
                }}
                zIndex={2}
                bg="rgba(230, 227, 228, 0.8)"
                backdropFilter="blur(10px)"
            >
                <Container maxW="container.lg">
                    <Flex py="4">
                        <Center>
                            <Text fontSize="2xl">
                                <NextLink href="/" passHref>
                                    <Link letterSpacing="widest">
                                        MOE YE HTET
                                    </Link>
                                </NextLink>
                            </Text>
                        </Center>
                        <Spacer />
                        <Center>
                            <Button
                                fontSize="lg"
                                fontWeight="normal"
                                ml="2"
                                variant="ghost"
                            >
                                <NextLink href="#about-me" passHref>
                                    <LinkOverlay>About Me</LinkOverlay>
                                </NextLink>
                            </Button>
                            <Button
                                fontSize="lg"
                                fontWeight="normal"
                                ml="2"
                                variant="ghost"
                            >
                                <LinkOverlay href="#contact">
                                    Contact
                                </LinkOverlay>
                            </Button>
                            <Button
                                fontSize="lg"
                                fontWeight="normal"
                                ml="2"
                                variant="ghost"
                            >
                                <LinkOverlay href="#resume">Resume</LinkOverlay>
                            </Button>
                        </Center>
                    </Flex>
                </Container>
            </Flex>
        </React.Fragment>
    );
}
