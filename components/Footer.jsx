import React from "react";
import { Container, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <React.Fragment>
            <footer>
                <Container maxW="container.lg">
                    <Text fontSize="sm" align="center" py="4">
                        Copyright &copy; 2022 Moe Ye Htet. All rights reserved.
                    </Text>
                </Container>
            </footer>
        </React.Fragment>
    );
}
