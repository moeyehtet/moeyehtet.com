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
    Button,
} from "@chakra-ui/react";

export default function About() {
    return (
        <React.Fragment>
            <Container id="about-me" maxW="container.md" py="8">
                <Flex direction="column" align="center">
                    <Flex align="center" mb="4">
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            mr="8"
                            src="/images/profile-photo.jpg"
                            alt="Moe Ye Htet"
                        />
                        <Box>
                            <Heading as="h1" size="2xl" letterSpacing="widest">
                                MOE YE HTET
                            </Heading>
                            <Text fontSize="2xl" letterSpacing="widest">
                                ELECTRICAL ENGINEER
                            </Text>
                        </Box>
                    </Flex>
                    <Box fontSize="lg" align="center" mb="4">
                        A highly-motivated Electrical Engineer with hands-on
                        engineering knowledge, teamwork skills and leadership
                        experience, seeking a full-time position where a
                        difference can be made towards groundbreaking
                        engineering solutions.
                    </Box>
                    <Box mb="4">
                        <Text>
                            Interests:{" "}
                            <Tag mx="1" colorScheme="blue">
                                Power Electronics
                            </Tag>
                            <Tag mx="1" colorScheme="blue">
                                Embedded Systems
                            </Tag>
                            <Tag mx="1" colorScheme="blue">
                                Industrial Control
                            </Tag>
                            <Tag mx="1" colorScheme="blue">
                                Circuit Design
                            </Tag>
                        </Text>
                    </Box>
                    <Box mb="4">
                        <Text>
                            Hobbies:{" "}
                            <Tag mx="1" colorScheme="blue">
                                Reading
                            </Tag>
                            <Tag mx="1" colorScheme="blue">
                                Movies
                            </Tag>
                            <Tag mx="1" colorScheme="blue">
                                Anime
                            </Tag>
                            <Tag mx="1" colorScheme="blue">
                                90&apos;s Hip-Hop
                            </Tag>
                        </Text>
                    </Box>
                    <Box>
                        <Text fontSize="lg">
                            Download my resume in PDF format{" "}
                            <NextLink href="/moeyehtet-resume.pdf" passHref>
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
