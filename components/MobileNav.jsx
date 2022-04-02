import React, { useState } from "react";
import NextLink from "next/link";
import {
    Box,
    Flex,
    Container,
    Center,
    Text,
    Link,
    Spacer,
    Button,
    Icon,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavLinks from "./NavLinks";

export default function MobileNav() {
    const [open, setOpen] = useState(false);

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
                            <Button
                                variant="ghost"
                                aria-label="open and close menu"
                                onClick={() => setOpen((prevOpen) => !prevOpen)}
                            >
                                {!open ? (
                                    <Icon as={AiOutlineMenu} w={8} h={8} />
                                ) : (
                                    <Icon as={AiOutlineClose} w={8} h={8} />
                                )}
                            </Button>
                        </Center>
                    </Box>
                    {open && (
                        <Box pb="4">
                            <NavLinks />
                        </Box>
                    )}
                </Container>
            </Flex>
        </React.Fragment>
    );
}
