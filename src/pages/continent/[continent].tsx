import Head from "next/head"
import {Flex, Img, Box, Heading, Text, Grid, GridItem, useBreakpointValue}from "@chakra-ui/react";
import { Header } from "../../components/Header"
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../services/api";
import { useRouter } from "next/dist/client/router";
import {VscLoading} from "react-icons/vsc";

interface ContinentProps {
    continent: {
        id: string,
        name: string,
        image: string,
        about: string,
        demographicData: {
            countries: number,
            languages: number,
            citiesPlus: number
        }
        cities: {
            name: string,
            country: string,
            cityImage: string,
            countryFlagImage: string
        }[]
    }
}


export default function Continent ({continent} : ContinentProps) {

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    });

    
    return (
    <>
        <Head>
            <title>WorldTrip | {`${continent.name}`}</title>
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
                    <Img w="100%" maxW="inherit" h="100%" src={continent.image} objectFit="cover"/>
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
                                fontSize="2rem">
                                    {continent.name}
                            </Heading>
                        </Box>
                    </Flex>
                </Flex>
                <Flex 
                    as="section"
                    w="100%" 
                    mx="auto"
                    my={["1.5rem","2rem"]}>
                    
                    <Flex px={["1rem", "5rem"]}>
                        
                        <Grid templateColumns="1">
                            <GridItem my="auto">
                                <Text textAlign="justify" fontSize=".875rem">
                                {continent.about}
                                </Text>
                            </GridItem>

                            <GridItem mx="auto" my="1.5rem" w="100%">
                                <Flex justifyContent="space-between">
                                    <Flex flexDirection="column">
                                        <Text textAlign="center" fontSize="2rem" color="#FFBA08" fontWeight="600" >{continent.demographicData.countries}</Text>
                                        <Text>países</Text>
                                    </Flex>

                                    <Flex flexDirection="column">
                                        <Text textAlign="center" fontSize="2rem" color="#FFBA08" fontWeight="600" >{continent.demographicData.languages}</Text>
                                        <Text>línguas</Text>
                                    </Flex>

                                    <Flex flexDirection="column">
                                        <Text textAlign="center" fontSize="2rem" color="#FFBA08" fontWeight="600" >{continent.demographicData.citiesPlus}</Text>
                                        <Text>cidades +100</Text>
                                    </Flex>
                                </Flex>
                            </GridItem>
                        </Grid>
                    </Flex>
                </Flex>
                <Flex as="section" px={["1rem", "5rem"]} flexDir="column" my="1.5rem">
                    <Heading fontSize="2rem" fontWeight="600">Cidades +100</Heading>
                    <Grid my="1.5rem" templateColumns="1" gridRowGap={5} mx="auto">
                    {continent.cities.map(city => (
                        <GridItem key={city.name}>
                            <Flex 
                                flexDir="column"
                                overflow="hidden"
                                borderRadius=".2rem"
                                w="240px">

                                <Img src={city.cityImage}/>
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
                                        <Heading as="h2" fontSize="1.25rem">{city.name}</Heading>
                                        <Text fontWeight="normal" mt=".5rem" fontSize="1rem" color="#999999">{city.country}</Text>
                                    </Flex>
                                    <Flex my="1.5rem">
                                        <Box borderRadius="100%" w="2.5rem" h="2.5rem">
                                            <Img src={city.countryFlagImage} w="2.5rem" h="2.5rem" objectFit="fill" />
                                        </Box>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </GridItem>
                    ))}
                    </Grid>
                </Flex>
            </>
            ) : (
            <>
                <Flex
                    w="100%" 
                    h="20rem"
                    mx="auto"
                    position="relative"
                    >
                    <Box w="100%" h="100%" bg="rgb(0,0,0, 0.6)" position="absolute"/>
                    <Img w="100%" maxW="inherit" h="100%" src={continent.image} objectFit="cover"/>
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
                                fontSize="2rem">
                                    {continent.name}
                            </Heading>
                        </Box>
                    </Flex>
                </Flex>
                <Flex 
                    as="section"
                    w="100%" 
                    h="14rem"
                    mx="auto"
                    my={["1.5rem","2rem"]}>
                        
                    <Flex px={["1rem", "5rem"]}>
                        
                        <Grid templateColumns="repeat(2, 1fr)" gridColumnGap={5}>
                            <GridItem colSpan={1} my="auto">
                                <Text textAlign="justify">
                                {continent.about}
                                </Text>
                            </GridItem>
        
                            <GridItem colSpan={1} m="auto auto">
                                <Flex justifyContent="space-between" w="20rem">
                                    <Flex flexDirection="column">
                                        <Text textAlign="center" fontSize="2rem" color="#FFBA08" fontWeight="600" >{continent.demographicData.countries}</Text>
                                        <Text>países</Text>
                                    </Flex>
        
                                    <Flex flexDirection="column">
                                        <Text textAlign="center" fontSize="2rem" color="#FFBA08" fontWeight="600" >{continent.demographicData.languages}</Text>
                                        <Text>línguas</Text>
                                    </Flex>
        
                                    <Flex flexDirection="column">
                                        <Text textAlign="center" fontSize="2rem" color="#FFBA08" fontWeight="600" >{continent.demographicData.citiesPlus}</Text>
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
                        {continent.cities.map(city => (
                        <GridItem key={city.name}>
                            <Flex 
                                flexDir="column"  
                                overflow="hidden"
                                borderRadius=".2rem" 
                                w="240px">
        
                                <Img src={city.cityImage}/>
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
                                        <Heading as="h2" fontSize="1.25rem">{city.name}</Heading>
                                        <Text fontWeight="normal" mt=".5rem" fontSize="1rem" color="#999999">{city.country}</Text>
                                    </Flex>
                                    <Flex my="1.5rem">
                                        <Box borderRadius="100%" w="2.5rem" h="2.5rem" overflow="hidden">
                                            <Img src={city.countryFlagImage} w="2.5rem" h="2.5rem" objectFit="fill" />
                                        </Box>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </GridItem>
                        ))}

                    </Grid>
                </Flex>
            </>
        )}
    </>
    )
}

export const getStaticPaths : GetStaticPaths = async () => {
    const continents = await api.get("/continents");
    const continentPaths = continents.data.map(continent => {
        return {params: {continent: continent.id}}
    });

    return {
        paths: continentPaths,
        fallback: false
    }
}

export const getStaticProps : GetStaticProps = async ({params}) => {
    const continentResponse = await api.get(`/continents/${params.continent}`).then(response => response.data);

    const continent = {
        id: continentResponse.id,
        name: continentResponse.name,
        image: continentResponse.image,
        about: continentResponse.about,
        demographicData: continentResponse.demographicData,
        cities: continentResponse.cities
    }

    return {
        props: {
            continent: continent
        }
    }
}