import React from "react";
import { Box, Heading, Grid, GridItem, Text, Icon } from "@chakra-ui/react";
import {
    SiMicrosoftoffice,
    SiGoogledrive,
    SiSlack,
    SiAltiumdesigner,
    SiAutodesk,
    SiCplusplus,
    SiPython,
    SiJavascript,
} from "react-icons/si";

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
                <Grid templateColumns="repeat(8, 1fr)" gap={6}>
                    <GridItem>
                        <Box>
                            <Text textAlign="center">
                                <Icon as={SiMicrosoftoffice} />
                            </Text>
                            <Text textAlign="center">Microsoft Office</Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Text textAlign="center">
                                <Icon as={SiGoogledrive} />
                            </Text>
                            <Text textAlign="center">Google Drive</Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Text textAlign="center">
                                <Icon as={SiSlack} />
                            </Text>
                            <Text textAlign="center">Slack</Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Text textAlign="center">
                                <Icon as={SiAltiumdesigner} />
                            </Text>
                            <Text textAlign="center">Altium Designer</Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Text textAlign="center">
                                <Icon as={SiAutodesk} />
                            </Text>
                            <Text textAlign="center">AutoCAD Electrical</Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Text textAlign="center">
                                <Icon as={SiCplusplus} />
                            </Text>
                            <Text textAlign="center">C++</Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Text textAlign="center">
                                <Icon as={SiPython} />
                            </Text>
                            <Text textAlign="center">Python</Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Text textAlign="center">
                                <Icon as={SiJavascript} />
                            </Text>
                            <Text textAlign="center">Javascript</Text>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </React.Fragment>
    );
}
