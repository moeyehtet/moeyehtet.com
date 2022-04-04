import React from "react";
import { Box, Heading, Grid, GridItem, Text, Icon } from "@chakra-ui/react";
import { skillsData } from "../data/data";

export default function Skills() {
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
                    SKILLS
                </Heading>
                <Grid
                    templateColumns={{
                        base: "repeat(2, 1fr)",
                        md: "repeat(4, 1fr)",
                        lg: "repeat(8, 1fr)",
                    }}
                    gap={6}
                >
                    {skillsData.map((sd) => (
                        <GridItem key={sd.id}>
                            <Box>
                                <Text textAlign="center">{sd.icon}</Text>
                                <Text textAlign="center">{sd.text}</Text>
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </React.Fragment>
    );
}
