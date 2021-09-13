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
            align="center" 
            marginX="auto"
            height="4rem"
            px={["1rem", "5rem"]}>
                
                <Box justifySelf="flex-start" position="absolute">
                    <PreviousButton />
                </Box>
                <Box mx="auto">
                    <Logo /> 
                </Box>
        </Flex>) 
        
        :

        <Flex 
                as="header" 
                w="100%" 
                alignItems="center" 
                justifyContent="center"
                marginX="auto"
                height="4rem">
                <Logo />
        </Flex>
    )
}