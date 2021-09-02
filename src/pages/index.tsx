import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { HomeBanner } from "../components/HomeBanner";
import { TravelTypesSection } from "../components/TravelTypesSection";

export default function Home() {
  return (
    <>
    <Header />
    <HomeBanner />
    <Box mt="2rem">
      <TravelTypesSection/>
    </Box>
    </>
  )
}
