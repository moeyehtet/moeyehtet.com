import React from "react";
import NextLink from "next/link";
import {
    Flex,
    Box,
    Heading,
    Text,
    Image,
    Container,
    Tag,
    Link,
} from "@chakra-ui/react";
import { aboutData } from "../data/data";

export default function About() {
    const {
        imgUrl,
        altText,
        name,
        title,
        objective,
        interests,
        hobbies,
        resumeUrl,
    } = aboutData;

    return (
        <React.Fragment>
            <Container
                scrollMarginTop={{ base: 72, md: 75 }}
                id="about-me"
                maxW="container.md"
                py="8"
            >
                <Flex direction="column" align="center">
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        align="center"
                        mb="4"
                    >
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            mr={{ base: 0, md: 8 }}
                            mb={{ base: 4, md: 0 }}
                            src={imgUrl}
                            alt={altText}
                        />
                        <Box
                            textAlign={{ base: "center", md: "start" }}
                            textTransform="capitalize"
                        >
                            <Heading
                                as="h1"
                                size="2xl"
                                letterSpacing="widest"
                                textTransform="capitalize"
                            >
                                {name}
                            </Heading>
                            <Text
                                fontSize="2xl"
                                letterSpacing="widest"
                                textTransform="capitalize"
                            >
                                {title}
                            </Text>
                        </Box>
                    </Flex>
                    <Box fontSize="lg" align="center" mb="4">
                        {objective}
                    </Box>
                    <Box textAlign="center" mb="4">
                        <Text lineHeight="tall">
                            Interests:{" "}
                            {interests.map((i) => (
                                <Tag key={i.id} mx="1" colorScheme="blue">
                                    {i.name}
                                </Tag>
                            ))}
                        </Text>
                    </Box>
                    <Box textAlign="center" mb="4">
                        <Text lineHeight="tall">
                            Hobbies:{" "}
                            {hobbies.map((h) => (
                                <Tag key={h.id} mx="1" colorScheme="blue">
                                    {h.name}
                                </Tag>
                            ))}
                        </Text>
                    </Box>
                    <Box>
                        <Text textAlign="center" fontSize="lg">
                            Download my resume in PDF format{" "}
                            <NextLink href={resumeUrl} passHref>
                                <Link
                                    fontWeight="semibold"
                                    color="blue.500"
                                    target="_blank"
                                >
                                    HERE
                                </Link>
                            </NextLink>
                            .
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </React.Fragment>
    );
}
