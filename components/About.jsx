import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import {
  Flex,
  Box,
  Heading,
  Text,
  Container,
  Tag,
  Link,
  chakra,
} from "@chakra-ui/react";
import profilePic from "../public/images/profile-photo.webp";
import { aboutData } from "../data/data";

export default function About() {
  const {
    imgUrl,
    altText,
    name,
    title,
    objective,
    interests,
    hobbies,
    resumeUrl,
  } = aboutData;

  const Image = chakra(NextImage, {
    baseStyle: { maxH: 150, maxW: 150 },
    shouldForwardProp: (prop) =>
      [
        "width",
        "height",
        "src",
        "alt",
        "quality",
        "placeholder",
        "blurDataURL",
        "loader ",
      ].includes(prop),
  });

  return (
    <React.Fragment>
      <Container
        scrollMarginTop={{ base: 72, md: 75 }}
        id="about-me"
        maxW="container.md"
        py="8"
      >
        <Flex direction="column" align="center">
          <Flex direction={{ base: "column", md: "row" }} align="center" mb="4">
            <Box mr={{ base: 0, md: 8 }} mb={{ base: 4, md: 0 }}>
              <Image
                borderRadius="full"
                src={profilePic}
                alt={altText}
                width={150}
                height={150}
              />
            </Box>

            {/* <Image
                            borderRadius="full"
                            boxSize="150px"
                            mr={{ base: 0, md: 8 }}
                            mb={{ base: 4, md: 0 }}
                            src={imgUrl}
                            alt={altText}
                        /> */}
            <Box
              textAlign={{ base: "center", md: "start" }}
              textTransform="capitalize"
            >
              <Heading
                as="h1"
                size="2xl"
                letterSpacing="widest"
                textTransform="capitalize"
              >
                {name}
              </Heading>
              <Text
                fontSize="2xl"
                letterSpacing="widest"
                textTransform="capitalize"
              >
                {title}
              </Text>
            </Box>
          </Flex>
          <Box fontSize="lg" align="center" mb="4">
            {objective}
          </Box>
          <Box textAlign="center" mb="4">
            <Text lineHeight="tall">
              Fields of Interest:{" "}
              {interests.map((i) => (
                <Tag key={i.id} mx="1" colorScheme="blue">
                  {i.name}
                </Tag>
              ))}
            </Text>
          </Box>
          <Box textAlign="center" mb="4">
            <Text lineHeight="tall">
              Hobbies:{" "}
              {hobbies.map((h) => (
                <Tag key={h.id} mx="1" colorScheme="blue">
                  {h.name}
                </Tag>
              ))}
            </Text>
          </Box>
          <Box textAlign="center">
            <Text textAlign="center" fontSize="lg" mb="2">
              Download my resume in PDF format below.
            </Text>
            <NextLink href={resumeUrl} passHref>
              <Link
                fontSize="lg"
                fontWeight="semibold"
                color="blue.600"
                target="_blank"
              >
                Download Resume
              </Link>
            </NextLink>
          </Box>
        </Flex>
      </Container>
    </React.Fragment>
  );
}
