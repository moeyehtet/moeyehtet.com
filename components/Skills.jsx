import React from "react";
import { Box, Heading, Grid, GridItem, Text, Icon } from "@chakra-ui/react";
import { adminSkills, programmingSkills, engrToolsSkills } from "../data/data";

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
        <Heading
          as="h3"
          size="md"
          letterSpacing="wider"
          textAlign="center"
          mb="4"
        >
          Administrative
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {adminSkills.map((sd) => (
            <GridItem key={sd.id}>
              <Box>
                <Text textAlign="center">{sd.icon}</Text>
                <Text textAlign="center">{sd.text}</Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
        <Heading
          as="h3"
          size="md"
          letterSpacing="wider"
          textAlign="center"
          mb="4"
          mt="6"
        >
          Engineering Tools
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {engrToolsSkills.map((sd) => (
            <GridItem key={sd.id}>
              <Box>
                <Text textAlign="center">{sd.icon}</Text>
                <Text textAlign="center">{sd.text}</Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
        <Heading
          as="h3"
          size="md"
          letterSpacing="wider"
          textAlign="center"
          mb="4"
          mt="6"
        >
          Programming
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {programmingSkills.map((sd) => (
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
