import React from "react";
import NextLink from "next/link";
import { Button, Link } from "@chakra-ui/react";

export default function NavLink({ data }) {
    const { name, link } = data;

    return (
        <NextLink href={link} passHref>
            <Link
                display="block"
                px="4"
                py="2"
                ml={{ base: 0, md: 2 }}
                mx={{ base: "auto" }}
                fontSize="lg"
                fontWeight="normal"
            >
                {name}
            </Link>
        </NextLink>
    );
}
