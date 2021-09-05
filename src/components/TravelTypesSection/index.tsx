import { Flex, Img, Text, Grid, GridItem, Icon, Box, useBreakpointValue} from "@chakra-ui/react";
import {BsFillCircleFill} from "react-icons/bs";

interface TravelTypesProps {
    nightTravelText: string,
    beachTravelText: string,
    modernTravelText: string,
    classicTravelText: string,
    restTravelText: string
}
export function TravelTypesSection({
    nightTravelText, 
    beachTravelText, 
    modernTravelText, 
    classicTravelText,
    restTravelText} : TravelTypesProps) {
    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        isWideScreen ? (
            <Flex 
            as="section"
            w="100%"
            m="4rem 0"
            justifyContent="space-between"
            px={["1rem", "7rem"]}>
                <Flex flexDirection="column">
                    <Img h="4rem" src="/images/Cocktail.svg"/>
                    <Text mt="1rem">{nightTravelText}</Text>
                </Flex>
                <Flex flexDirection="column" alignItems="center">
                    <Img h="4rem" src="/images/Surf.svg"/>
                    <Text mt="1rem">{beachTravelText}</Text>
                </Flex>
                <Flex flexDirection="column" alignItems="center">
                    <Img h="4rem" src="/images/Predio.svg"/>
                    <Text mt="1rem">{modernTravelText}</Text>
                </Flex>
                <Flex flexDirection="column" alignItems="center">
                    <Img h="4rem" src="/images/Museu.svg"/>
                    <Text mt="1rem">{classicTravelText}</Text>
                </Flex>
                <Flex flexDirection="column" alignItems="center">
                    <Img h="4rem" src="/images/Mundo.svg"/>
                    <Text mt="1rem">{restTravelText}</Text>
                </Flex>
            </Flex>
        ) : (
            <Flex 
            as="section"
            w="100%"
            m="3rem 0"
            px={["1rem", "7rem"]}>
            <Flex w="inherit">
                <Grid w="inherit" templateColumns="repeat(2, 1fr)" gap={2}>
                    <GridItem 
                        display="flex" 
                        justifyContent="space-between" 
                        flexDirection="column" 
                        h="4rem" 
                        colSpan={1}>
                        <Box>
                            <Icon 
                                as={BsFillCircleFill} 
                                color="#FFBA08" 
                                height=".6rem"/> 
                                {nightTravelText}
                        </Box>

                        <Box>
                            <Icon 
                                as={BsFillCircleFill} 
                                color="#FFBA08" 
                                height=".6rem"/> 
                                {beachTravelText}
                        </Box>

                    </GridItem>

                    <GridItem                       
                        display="flex" 
                        justifyContent="space-between" 
                        flexDirection="column"
                        alignItems="flex-end"
                        h="4rem" 
                        colSpan={1}>
                        <Box>
                            <Icon 
                                as={BsFillCircleFill} 
                                color="#FFBA08" 
                                height=".6rem"/> 
                                {modernTravelText}
                        </Box>

                        <Box>
                            <Icon 
                                as={BsFillCircleFill} 
                                color="#FFBA08" 
                                height=".6rem"/> 
                                {classicTravelText}
                        </Box>
                    </GridItem>

                    <GridItem                       
                        display="flex" 
                        alignItems="center"
                        justifyContent="center"
                        h="4rem" 
                        colSpan={2}>
                        <Box>
                            <Icon 
                                as={BsFillCircleFill} 
                                color="#FFBA08" 
                                height=".6rem"/> 
                                {restTravelText}
                        </Box>
                    </GridItem>
                </Grid>
            </Flex>
        </Flex>
        )
    )
}