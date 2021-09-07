import {Heading, Text, Flex, Link as ChakraLink} from "@chakra-ui/react"
import  Link  from "next/link" ;

interface SwiperTextProps {
    href: string,
    headerText: string,
    subText: string
}

export function SwiperText ({href, headerText, subText} : SwiperTextProps) {
    return (
        <Flex
            position="absolute"
            align="center"
            justify="center"
            color="gray.200">
                <Link href={href}>
                    <ChakraLink _hover={{color: "#FFBA08"}}>
                        <Flex flexDir="column" align="center">
                            <Heading fontSize={["1.5rem","2rem"]}>{headerText}</Heading>
                            <Text fontSize={["1rem","1rem"]}>{subText}</Text>
                        </Flex>
                    </ChakraLink>
                </Link>
        </Flex>
    )
}