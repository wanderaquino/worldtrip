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
            maxW="1440px" 
            align="center" 
            marginX="auto"
            justify="flex-start"
            height="4rem"
            px={["1rem", "5rem"]}
            >
                <Box flex={.7}>
                    <PreviousButton />
                </Box>
                <Box flex={1}>
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