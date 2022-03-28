import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Flex, Box, Divider } from "@chakra-ui/react";

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Flex height="100vh" direction="column">
                <Navbar />
                <Divider />
                <Box flex="1">{children}</Box>
                <Divider />
                <Footer />
            </Flex>
        </React.Fragment>
    );
}
