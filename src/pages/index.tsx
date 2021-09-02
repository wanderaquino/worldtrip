import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { HomeBanner } from "../components/HomeBanner";
import { TravelTypesSection } from "../components/TravelTypesSection";

export default function Home() {
  return (
    <>
    <Header />
    <HomeBanner />
    <TravelTypesSection
      nightTravelText="vida noturna"
      beachTravelText="praia"
      modernTravelText="moderno"
      classicTravelText="clássico"
      restTravelText="e mais..."/>
    </>
  )
}
