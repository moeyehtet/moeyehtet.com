import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { eduData } from "../data/data";

export default function Education() {
    const { degree, uni, duration } = eduData;

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
                    {degree}
                </Text>
                <Text fontSize="lg" textAlign="center">
                    {uni}
                </Text>
                <Text fontSize="lg" textAlign="center">
                    {duration}
                </Text>
            </Box>
        </React.Fragment>
    );
}
