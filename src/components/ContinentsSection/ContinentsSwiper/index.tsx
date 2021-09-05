import { Flex, Img, Text, Heading, Box } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export default function ContinentSwiper() {
    return (
        <Flex
        w="100%"
        h="15rem"
        mt="1rem"
        mb="1rem"
        px={["0", "2rem"]}
        justify="center">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                speed={1000}
                centeredSlides
                navigation
                pagination={{clickable: true}}>
                
                <SwiperSlide>
                    <Box position="absolute" w="100%" h="100%" bg="rgba(0,0,0,0.5)" />
                    <Flex
                        justify="center" 
                        alignItems="center" 
                        w="100%" 
                        h="100%"
                        >
                        <Link
                            href="">
                            <Img
                                src="/images/Europe.jpg" />
                        </Link>

                        <Flex   
                            position="absolute"
                            align="center"
                            justify="center"
                            color="gray.200"
                            flexDir="column">
                            <Heading fontSize={["1.5rem","2rem"]}>
                                Europa
                            </Heading>
                            <Text fontSize={["1rem","1rem"]}>
                                O continente mais antigo
                            </Text>
                        </Flex>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Box position="absolute" w="100%" h="100%" bg="rgba(0,0,0,0.5)" />
                    <Flex 
                        justify="center" 
                        alignItems="center" 
                        w="100%" 
                        h="100%">
                        
                        <Link href="">
                            <Img src="/images/America.jpg" />
                        </Link>
                        <Flex   
                            position="absolute"
                            align="center"
                            justify="center"
                            color="gray.200"
                            flexDir="column">
                            <Heading fontSize={["1.5rem","2rem"]}>
                                América
                            </Heading>
                            <Text fontSize={["1rem","1rem"]}>
                                O continente mais conhecido
                            </Text>
                        </Flex>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Box position="absolute" w="100%" h="100%" bg="rgba(0,0,0,0.5)" />
                    <Flex 
                        justify="center" 
                        alignItems="center" 
                        w="100%" 
                        h="100%">
                        
                        <Link href="">
                            <Img src="/images/Africa.jpg" />
                        </Link>
                        <Flex   
                            position="absolute"
                            align="center"
                            justify="center"
                            color="gray.200"
                            flexDir="column">
                            <Heading fontSize={["1.5rem","2rem"]}>
                                África
                            </Heading>
                            <Text fontSize={["1rem","1rem"]}>
                                O continente mais vislumbrante
                            </Text>
                        </Flex>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Box position="absolute" w="100%" h="100%" bg="rgba(0,0,0,0.5)" />
                    <Flex 
                        justify="center" 
                        alignItems="center" 
                        w="100%" 
                        h="100%">
                        
                        <Link href="">
                            <Img src="/images/Asia.jpg" />
                        </Link>
                        <Flex   
                            position="absolute"
                            align="center"
                            justify="center"
                            color="gray.200"
                            flexDir="column">
                            <Heading fontSize={["1.5rem","2rem"]}>
                                Ásia
                            </Heading>
                            <Text fontSize={["1rem","1rem"]}>
                                Onde a cultura impera
                            </Text>
                        </Flex>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Box position="absolute" w="100%" h="100%" bg="rgba(0,0,0,0.5)" />
                    <Flex 
                        justify="center" 
                        alignItems="center" 
                        w="100%" 
                        h="100%">
                        
                        <Link href="">
                            <Img src="/images/Oceania.jpg" />
                        </Link>

                        <Flex   
                            position="absolute"
                            align="center"
                            justify="center"
                            color="gray.200"
                            flexDir="column">
                            <Heading fontSize={["1.5rem","2rem"]}>
                                Oceania
                            </Heading>
                            <Text fontSize={["1rem","1rem"]}>
                                O continente mais simbólico
                            </Text>
                        </Flex>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}