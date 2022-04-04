import React, { useState } from "react";
import NextLink from "next/link";
import NavLink from "./NavLink";
import {
    Container,
    Flex,
    Center,
    Text,
    Link,
    Spacer,
    Box,
} from "@chakra-ui/react";
import { navData } from "../data/data";

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
                    <Box display="flex" py="4">
                        <Center>
                            <Text fontSize="2xl" fontWeight="light">
                                <NextLink href="/" passHref>
                                    <Link letterSpacing="widest">
                                        MOE YE HTET
                                    </Link>
                                </NextLink>
                            </Text>
                        </Center>
                        <Spacer />
                        <Center>
                            {navData.map((nd) => (
                                <NavLink key={nd.id} data={nd} />
                            ))}
                        </Center>
                    </Box>
                </Container>
            </Flex>
        </React.Fragment>
    );
}
