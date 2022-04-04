import React from "react";
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
import { expData } from "../data/data";

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
                    {expData.map((ed) => (
                        <React.Fragment key={ed.id}>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Text fontSize="lg">{ed.duration}</Text>
                            </GridItem>
                            <GridItem
                                colSpan={4}
                                pl="4"
                                borderLeft="1px"
                                borderColor="gray.200"
                            >
                                <Text fontSize="lg" fontWeight="semibold">
                                    {ed.title}
                                </Text>
                                <Text>{ed.team}</Text>
                                <UnorderedList>
                                    {ed.points.map((pt) => (
                                        <ListItem key={pt.id}>
                                            {pt.content}
                                        </ListItem>
                                    ))}
                                </UnorderedList>
                            </GridItem>
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>
        </React.Fragment>
    );
}
