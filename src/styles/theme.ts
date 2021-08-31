import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        white: "#F5F8FA",
        gray: {
            800: "#47585B"
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