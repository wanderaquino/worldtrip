import Head from "next/head"
import {Flex, Img} from "@chakra-ui/react";
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
            maxW="1260px"
            h="20rem"
            mx="auto">
            <Img 
                href="/images/Europe.jpg" />
        </Flex>
    </>
    )
}