import { Box, Flex } from "@chakra-ui/react";


export function PageDivider() {
    return (
        <Flex w="100%" px={["2rem", "7rem"]} alignItems="center" justifyContent="center">
            <Box 
                width="5rem"
                height="1.2px"
                bg="gray.800"/>
        </Flex>
    )   
}