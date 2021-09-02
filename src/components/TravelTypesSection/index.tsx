import { Flex, List, ListItem, ListIcon, Grid, GridItem, Icon, Box, useBreakpointValue} from "@chakra-ui/react";
import {BsFillCircleFill} from "react-icons/bs";

export function TravelTypesSection() {
    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        isWideScreen ? (<h1>Hello!</h1> ) : (
            <Flex 
            as="section"
            w="100%"
            px={["1rem","7rem"]}>
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
                                vida noturna
                        </Box>

                        <Box>
                            <Icon 
                                as={BsFillCircleFill} 
                                color="#FFBA08" 
                                height=".6rem"/> 
                                praia
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
                                moderno
                        </Box>

                        <Box>
                            <Icon 
                                as={BsFillCircleFill} 
                                color="#FFBA08" 
                                height=".6rem"/> 
                                clássico
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
                                e mais...
                        </Box>
                    </GridItem>
                </Grid>
            </Flex>
        </Flex>
        )
    )
}