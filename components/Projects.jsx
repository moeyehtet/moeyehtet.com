import React from "react";
import {
    Box,
    Heading,
    Grid,
    GridItem,
    Text,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";

export default function Projects() {
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
                    PROJECTS
                </Heading>
                <Grid
                    templateRows="repeat(2,1fr)"
                    templateColumns="repeat(5,1fr)"
                    gap={4}
                    alignItems="center"
                >
                    <GridItem rowSpan={1} colSpan={1}>
                        <Text fontSize="lg">2019</Text>
                    </GridItem>
                    <GridItem
                        colSpan={4}
                        pl="4"
                        borderLeft="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="lg" fontWeight="semibold">
                            Digital Wavetable Synthesizer
                        </Text>
                        <Text>Senior Design Project for Graduation</Text>
                        <UnorderedList>
                            <ListItem>
                                Designed the charging circuit and DC-DC
                                converters for the power supply subsystem.
                            </ListItem>
                            <ListItem>
                                Designed the ADSR module and amplifier circuit
                                for sound output subsystem.
                            </ListItem>
                            <ListItem>
                                Designed the PCBs for the power supply and sound
                                output subsystems.
                            </ListItem>
                        </UnorderedList>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        <Text fontSize="lg">2018</Text>
                    </GridItem>
                    <GridItem
                        colSpan={4}
                        pl="4"
                        borderLeft="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="lg" fontWeight="semibold">
                            Face-tracking Assistive Phone Mount
                        </Text>
                        <Text>
                            Microprocessor Systems and Interfacing Final Project
                        </Text>
                        <UnorderedList>
                            <ListItem>
                                Performed system integration of LCD touchscreen
                                controls and servo motors.
                            </ListItem>
                            <ListItem>
                                Designed power supply circuit and PCB for the
                                project.
                            </ListItem>
                        </UnorderedList>
                    </GridItem>
                </Grid>
            </Box>
        </React.Fragment>
    );
}
