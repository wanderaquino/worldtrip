import Head from "next/head"
import {Flex, Img, Box, Heading, Text, Grid, GridItem, useBreakpointValue}from "@chakra-ui/react";
import { Header } from "../../components/Header"

export default function Continent () {

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    });
    
    return (
    <>
        <Head>
            <title>WorldTrip | Home</title>
        </Head>
        <Header isContinentPage={true}/>

        {
            !isWideScreen ? (
            <>
                <Flex
                    w="100%" 
                    h="20rem"
                    mx="auto"
                    position="relative"
                    alignItems="center"
                    justifyContent="center">

                    <Box w="100%" h="100%" bg="rgb(0,0,0, 0.6)" position="absolute"/>
                    <Img w="100%" maxW="inherit" h="100%" src="/images/Europe.jpg" objectFit="cover"/>
                    <Flex 
                        w="100%" 
                        h="100%" 
                        px={["1rem", "5rem"]}
                        py={["0", "2.5rem"]}
                        position="absolute" 
                        alignItems="center"
                        justifyContent="center">
                        <Box>
                            <Heading
                                color="white"
                                fontWeight="700"
                                fontSize="2rem"
                                >Europa
                            </Heading>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            ) : (
            <Flex
                w="100%" 
                h="20rem"
                mx="auto"
                position="relative"
                >
                <Box w="100%" h="100%" bg="rgb(0,0,0, 0.6)" position="absolute"/>
                <Img w="100%" maxW="inherit" h="100%" src="/images/Europe.jpg" objectFit="cover"/>
                <Flex 
                    w="100%" 
                    h="100%" 
                    px={["1rem", "5rem"]}
                    py={["0", "2.5rem"]}
                    position="absolute" 
                    alignItems="flex-end">
                    <Box>
                        <Heading
                            color="white"
                            fontWeight="700"
                            fontSize="2rem"
                            >Europa
                        </Heading>
                    </Box>
                </Flex>
            </Flex>
            )
        }
        <Flex 
            as="section"
            w="100%" 
            h="14rem"
            mx="auto"
            my={["1.5rem","2rem"]}
            >
            
            <Flex
                px={["1rem", "5rem"]}>
                
                <Grid templateColumns="repeat(2, 1fr)" gridColumnGap={5}>
                    <GridItem colSpan={1} my="auto">
                        <Text textAlign="justify">
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
                        </Text>
                    </GridItem>

                    <GridItem colSpan={1} m="auto auto">
                        <Flex justifyContent="space-between" w="20rem">
                            <Flex flexDirection="column">
                                <Text textAlign="center" fontSize="2rem" color="#FFBA08" fontWeight="600" >50</Text>
                                <Text>países</Text>
                            </Flex>

                            <Flex flexDirection="column">
                                <Text textAlign="center" fontSize="2rem" color="#FFBA08" fontWeight="600" >30</Text>
                                <Text>línguas</Text>
                            </Flex>

                            <Flex flexDirection="column">
                                <Text textAlign="center" fontSize="2rem" color="#FFBA08" fontWeight="600" >27</Text>
                                <Text>cidades +100</Text>
                            </Flex>
                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>
        </Flex>
        <Flex as="section" px={["1rem", "5rem"]} flexDir="column" my="1.5rem">
            <Heading fontSize="2rem" fontWeight="600">Cidades +100</Heading>
            <Grid my="1.5rem" templateColumns="repeat(4, 1fr)" gap={5} >
                <GridItem>
                    <Flex 
                        flexDir="column"  
                        overflow="hidden"
                        borderRadius=".2rem" 
                        w="240px">

                        <Img src="/images/UnitedKing.png"/>
                        <Flex 
                            flexDir="row" 
                            justifyContent="space-between" 
                            alignItems="center" 
                            padding="1rem" 
                            border="solid" 
                            borderWidth=".1rem" 
                            borderColor="rgba(255, 186, 8, 0.5)" 
                            borderTop="none">

                            <Flex flexDir="column">
                                <Heading as="h2" fontSize="1.25rem">Londres</Heading>
                                <Text fontWeight="normal" mt=".5rem" fontSize="1rem" color="#999999">Reino Unido</Text>
                            </Flex>
                            <Flex my="1.5rem">
                                <Box borderRadius="100%" w="2.5rem" h="2.5rem">
                                    <Img src="/images/EnglandFlag.png" w="2.5rem" h="2.5rem" objectFit="fill" />
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </GridItem>
            </Grid>
        </Flex>
    </>
    )
}