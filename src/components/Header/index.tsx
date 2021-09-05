import { Flex } from "@chakra-ui/react";
import { Logo } from "../Logo";
export function Header () {
    return (
        <Flex 
            as="header" 
            w="100%" 
            maxW="760px" 
            alignItems="center" 
            justifyContent="center"
            marginX="auto"
            height="4rem"
            >
            <Logo />
        </Flex>
    )
}