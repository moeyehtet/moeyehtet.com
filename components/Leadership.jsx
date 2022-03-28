import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Leadership() {
    return (
        <React.Fragment>
            <Box mb="8">
                <Heading
                    as="h2"
                    size="lg"
                    letterSpacing="wider"
                    textAlign="center"
                    mb="4"
                >
                    LEADERSHIP
                </Heading>
                <Box mb="4">
                    <Text
                        fontSize="lg"
                        fontWeight="semibold"
                        textAlign="center"
                    >
                        Project Management Co-officer
                    </Text>
                    <Text textAlign="center">Thate Pan Hub</Text>
                    <Text textAlign="center">2021-Present</Text>
                </Box>
                <Box mb="4">
                    <Text
                        fontSize="lg"
                        fontWeight="semibold"
                        textAlign="center"
                    >
                        Chair of Multicultural Relations Committee
                    </Text>
                    <Text textAlign="center">
                        Electrical and Computer Engineering Student Society
                        (Purdue)
                    </Text>
                    <Text textAlign="center">2017-2019</Text>
                </Box>
                <Box mb="4">
                    <Text
                        fontSize="lg"
                        fontWeight="semibold"
                        textAlign="center"
                    >
                        Co-founder and Vice-President
                    </Text>
                    <Text textAlign="center">
                        Myanmar Student Society (Purdue)
                    </Text>
                    <Text textAlign="center">2018-2019</Text>
                </Box>
            </Box>
        </React.Fragment>
    );
}
