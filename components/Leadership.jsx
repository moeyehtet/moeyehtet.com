import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { leadData } from "../data/data";

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
                {leadData.map((ld) => (
                    <Box key={ld.id} mb="4">
                        <Text
                            fontSize="lg"
                            fontWeight="semibold"
                            textAlign="center"
                        >
                            {ld.title}
                        </Text>
                        <Text textAlign="center">{ld.team}</Text>
                        <Text textAlign="center">{ld.duration}</Text>
                    </Box>
                ))}
            </Box>
        </React.Fragment>
    );
}
