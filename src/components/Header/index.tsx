import { Flex, Box } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { PreviousButton } from "./PreviousButton";

interface HeaderProps {
    isContinentPage?: boolean 
}

export function Header ({isContinentPage = false} : HeaderProps) {

    return (
        
        isContinentPage ? (            
        
        <Flex 
            as="header" 
            w="100%" 
            maxW="1260px" 
            align="center" 
            marginX="auto"
            justify="center"
            justifyContent="center"
            height="4rem"
            position="relative"
            >
                <Box 
                    position="absolute" 
                    left={0}
                    mx={["2rem", "2rem", "2rem", "2rem", "0"]}
                    >
                    <PreviousButton />
                </Box>
                <Box>
                    <Logo />
                </Box>
        </Flex>) 
        
        :

        <Flex 
                as="header" 
                w="100%" 
                maxW="760px" 
                alignItems="center" 
                justifyContent="center"
                marginX="auto"
                height="4rem">
                <Logo />
        </Flex>
    )
}