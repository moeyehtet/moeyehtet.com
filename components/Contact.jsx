import React from "react";
import {
    Flex,
    Box,
    Text,
    Container,
    Icon,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { FaPhone, FaLinkedinIn, FaHome, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <React.Fragment>
            <Container id="contact" maxW="container.md" py="8">
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <GridItem>
                        <Text fontSize="lg">
                            <Icon as={FaPhone} /> Phone: +95 9790647222
                        </Text>
                        <Text fontSize="lg">
                            <Icon as={FaEnvelope} /> Email:
                            moeyehtet96@gmail.com
                        </Text>
                        <Text fontSize="lg">
                            <Icon as={FaLinkedinIn} /> LinkedIn: moeyehtet96
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Text fontSize="lg">
                            <Icon as={FaHome} /> Address:
                        </Text>
                        <Text fontSize="lg">
                            No. 16, Lower Mandalay Street, Mingalar Taung Nyunt
                            Tsp, Yangon, Myanmar 11221
                        </Text>
                    </GridItem>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
