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
import { projData } from "../data/data";

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
                    {projData.map((pd) => (
                        <React.Fragment key={pd.id}>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Text fontSize="lg">{pd.duration}</Text>
                            </GridItem>
                            <GridItem
                                colSpan={4}
                                pl="4"
                                borderLeft="1px"
                                borderColor="gray.200"
                            >
                                <Text fontSize="lg" fontWeight="semibold">
                                    {pd.title}
                                </Text>
                                <Text>{pd.team}</Text>
                                <UnorderedList>
                                    {pd.points.map((pt) => (
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
