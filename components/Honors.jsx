import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Honors() {
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
                    HONORS
                </Heading>
                <Box mb="4">
                    <Text
                        fontSize="lg"
                        fontWeight="semibold"
                        textAlign="center"
                    >
                        Myanmar President&apos;s Scholarship
                    </Text>
                    <Text textAlign="center">2015-2019</Text>
                </Box>
                <Box mb="4">
                    <Text
                        fontSize="lg"
                        fontWeight="semibold"
                        textAlign="center"
                    >
                        Eli Shay Scholarship (Purdue ECE Department)
                    </Text>
                    <Text textAlign="center">2016-2017</Text>
                </Box>
            </Box>
        </React.Fragment>
    );
}
