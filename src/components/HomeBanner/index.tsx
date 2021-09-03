import { Box, Flex, Heading, Img, Text, useBreakpointValue } from "@chakra-ui/react";

export function HomeBanner() {

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Flex 
            w="100%"
            background="linear-gradient(207deg, rgba(2,0,36,1) 46%, rgba(2,20,54,1) 51%, rgba(10,67,79,1) 93%)"
            height="15rem"
            px={["1rem","7rem"]}
            justify="space-between"
            >
            <Flex 
                flexDir="column"
                justifyContent="center"
                justify="space-between"
                >
                <Heading as="h1"
                    w="16rem"
                    fontWeight="500" 
                    lineHeight="1.875rem"
                    fontSize={["1rem","1.25rem"]}
                    color="gray.200">
                    5 Continentes, {<br/>} infinitas possibilidades.
                </Heading>
                <Text 
                    color="gray.100"
                    fontWeight="400"
                    fontSize=".75rem"
                    mt=".5rem">
                    Chegou a hora de tirar do papel a viagem que {<br/>} você sempre sonhou
                </Text>
            </Flex>
            {isWideScreen && (
            <Flex>
                <Img 
                    src="/images/Airplane.svg" 
                    alt="Avião do Banner representando viagem"
                    height="12rem"
                    position="relative" bottom={-70}
                    >
                </Img>
            </Flex>
            )}
        </Flex>
    )
}