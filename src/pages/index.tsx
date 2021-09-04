import { Box } from "@chakra-ui/react";
import { ContinentsSection } from "../components/ContinentsSection";
import { Header } from "../components/Header";
import { HomeBanner } from "../components/HomeBanner";
import { PageDivider } from "../components/PageDivider";
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
      <PageDivider />
      <ContinentsSection />
    </>
  )
}
