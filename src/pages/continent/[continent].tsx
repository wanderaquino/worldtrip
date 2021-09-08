import Head from "next/head"
import {Flex, Img, Box, Heading} from "@chakra-ui/react";
import { Header } from "../../components/Header"

export default function Continent () {
    return (
    <>
        <Head>
            <title>WorldTrip | Home</title>
        </Head>
        <Header isContinentPage={true}/>
        <Flex
            w="100%" 
            h="20rem"
            mx="auto"
            position="relative"
            >
            <Box w="inherit" h="inherit" bg="rgb(0,0,0, 0.6)" position="absolute"/>
            <Img w="inherit" maxW="inherit" h="inherit" src="/images/Europe.jpg" objectFit="cover"/>

            <Box
                position="absolute" 
                px={["1rem", "3rem"]}
                bottom={10}
                >
                <Heading
                    color="white"
                    fontWeight="700"
                    fontSize="2rem"
                    >Europa
                </Heading>
            </Box>

        </Flex>
    </>
    )
}