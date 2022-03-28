import {
    Box,
    Center,
    Grid,
    GridItem,
    Heading,
    Text,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";
import React from "react";

export default function Experience() {
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
                    EXPERIENCE
                </Heading>
                <Grid
                    templateRows="repeat(3,1fr)"
                    templateColumns="repeat(5,1fr)"
                    gap={4}
                    alignItems="center"
                >
                    <GridItem rowSpan={1} colSpan={1}>
                        <Text fontSize="lg">2018-2019</Text>
                    </GridItem>
                    <GridItem
                        colSpan={4}
                        pl="4"
                        borderLeft="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="lg" fontWeight="semibold">
                            Undergraduate Teaching Assistant
                        </Text>
                        <Text>
                            Purdue University (Electronic Measurement Techniques
                            Lab)
                        </Text>
                        <UnorderedList>
                            <ListItem>
                                Led the lab sessions and provided technical and
                                theoretical assistance to students.
                            </ListItem>
                            <ListItem>
                                Performed equipment maintenance and kept
                                inventory of lab materials.
                            </ListItem>
                        </UnorderedList>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        <Text fontSize="lg">2017-2018</Text>
                    </GridItem>
                    <GridItem
                        colSpan={4}
                        pl="4"
                        borderLeft="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="lg" fontWeight="semibold">
                            Controls Engineer
                        </Text>
                        <Text>EPICS Program (Purdue Orbital Team)</Text>
                        <UnorderedList>
                            <ListItem>
                                Designed PID control system for DC worm gear
                                motor and linear actuator.
                            </ListItem>
                            <ListItem>
                                Designed the power supply circuit for the
                                control system and designed the PCB.
                            </ListItem>
                        </UnorderedList>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        <Text fontSize="lg">2016-2017</Text>
                    </GridItem>
                    <GridItem
                        colSpan={4}
                        pl="4"
                        borderLeft="1px"
                        borderColor="gray.200"
                    >
                        <Text fontSize="lg" fontWeight="semibold">
                            Undergraduate Research Assistant
                        </Text>
                        <Text>
                            Vertically Integrated Projects (Signal Integrity
                            Team)
                        </Text>
                        <UnorderedList>
                            <ListItem>
                                Conducted research about electromagnetic
                                compatibility regulations and suitable
                                compliance testing techniques.
                            </ListItem>
                            <ListItem>
                                Developed a radiative and conductive compliance
                                test using the spectrum analyzer.
                            </ListItem>
                        </UnorderedList>
                    </GridItem>
                </Grid>
            </Box>
        </React.Fragment>
    );
}
