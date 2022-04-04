import React from "react";
import { Link, Text, Container, Icon, Grid, GridItem } from "@chakra-ui/react";
import { FaPhone, FaLinkedinIn, FaHome, FaEnvelope } from "react-icons/fa";
import { contactData } from "../data/data";

export default function Contact() {
    const { phone, email, linkedin, address } = contactData;

    return (
        <React.Fragment>
            <Container
                scrollMarginTop={{ base: 72, md: 75 }}
                id="contact"
                maxW="container.md"
                py="8"
            >
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                    }}
                    textAlign={{ base: "center", md: "start" }}
                    gap={6}
                >
                    <GridItem>
                        <Text fontSize="lg">
                            <Icon as={FaPhone} mb="0" /> Phone:{" "}
                            <Link href={`tel:${phone}`}>{phone}</Link>
                        </Text>
                        <Text fontSize="lg">
                            <Icon as={FaEnvelope} /> Email:{" "}
                            <Link href={`mailto:${email}`}>{email}</Link>
                        </Text>
                        <Text fontSize="lg">
                            <Icon as={FaLinkedinIn} /> LinkedIn:{" "}
                            <Link
                                href={`https://www.linkedin.com/in/${linkedin}`}
                                target="_blank"
                            >
                                {linkedin}
                            </Link>
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Text fontSize="lg">
                            <Icon as={FaHome} /> Address:
                        </Text>
                        <Text fontSize="lg">{address}</Text>
                    </GridItem>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
