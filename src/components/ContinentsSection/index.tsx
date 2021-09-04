import { Flex, Heading } from "@chakra-ui/react";


export function ContinentsSection () {
    return (
        <Flex
            as="section" 
            w="100%"
            h="5rem"
            mt="2rem"
            px={["1rem","7rem"]}
            justify="center"
        >       
            <Flex   
                align="center"
                flexDirection="column"
            >
                <Heading 
                    as="h1" 
                    fontWeight="500"
                    fontSize={["1rem","1.2rem"]}
                    textAlign="center">
                    Vamos nessa?{<br/>}Então escolha seu continente
                </Heading>
            </Flex>
        </Flex>
    )
}