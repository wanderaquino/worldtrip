import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        white: "#F5F8FA",
        gray: {
            800: "#47585B",
            200: "#F5F8FA",
            100: "#DADADA"
        }
    },
    styles: {
        global: {
            body: {
                bg: "white"
            }
        }
    },
    fonts: {
        heading: "Poppins",
        body: "Poppins"
    }
})