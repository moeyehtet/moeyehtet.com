import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Education() {
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
                    EDUCATION
                </Heading>
                <Text fontSize="lg" textAlign="center" fontWeight="semibold">
                    Bachelor of Science in Electrical Engineering
                </Text>
                <Text fontSize="lg" textAlign="center">
                    Purdue University (West Lafayette, IN, USA)
                </Text>
                <Text fontSize="lg" textAlign="center">
                    2015-2019
                </Text>
            </Box>
        </React.Fragment>
    );
}
