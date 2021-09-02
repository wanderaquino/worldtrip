import { Box, Flex } from "@chakra-ui/react";


export function PageDivider() {
    return (
        <Flex w="100%" px={["2rem", "7rem"]} alignItems="center">
            <Box border="solid" height="1px" color="black" w="5rem" />
        </Flex>
    )   
}