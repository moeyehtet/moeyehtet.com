import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import { Flex, Box, Divider, useMediaQuery } from "@chakra-ui/react";

export default function Layout({ children }) {
    const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");

    return (
        <React.Fragment>
            <Flex height="100vh" direction="column">
                {isLargerThanMd ? <Navbar /> : <MobileNav />}
                <Divider />
                <Box flex="1">{children}</Box>
                <Divider />
                <Footer />
            </Flex>
        </React.Fragment>
    );
}
