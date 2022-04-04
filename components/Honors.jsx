import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { honsData } from "../data/data";

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
                {honsData.map((hd) => (
                    <Box key={hd.id} mb="4">
                        <Text
                            fontSize="lg"
                            fontWeight="semibold"
                            textAlign="center"
                        >
                            {hd.title}
                        </Text>
                        <Text textAlign="center">{hd.duration}</Text>
                    </Box>
                ))}
            </Box>
        </React.Fragment>
    );
}
