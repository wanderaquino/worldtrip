import { Flex, Img, Text, Heading, Box, Link as ChakraLink, Link } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperText } from "../SwiperText";

export default function ContinentSwiper() {
    return (
        <Flex
        w="100%"
        h="15rem"
        mt="1rem"
        px={["0", "7rem"]}
        justify="center">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                speed={1000}
                centeredSlides
                navigation
                pagination={{clickable: true}}>
                
                <SwiperSlide>
                    <Box position="absolute" w="100%" h="100%" bg="rgba(0,0,0,0.6)"/>
                    <Flex
                        justify="center" 
                        alignItems="center" 
                        w="100%" 
                        h="100%"
                        >
                        <Img src="/images/Europe.jpg" />
                    <SwiperText headerText="Europa" subText="O continente mais conhecido" />

                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}