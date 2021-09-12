import Head from "next/head";
import { ContinentsSection } from "../components/ContinentsSection";
import { Header } from "../components/Header";
import { HomeBanner } from "../components/HomeBanner";
import { PageDivider } from "../components/PageDivider";
import { TravelTypesSection } from "../components/TravelTypesSection";
import { api } from "../services/api";
import ContinentSwiper from "../components/ContinentsSwiper";


interface HomeContinentProps {
  continents: {
    id: string,
    name: string,
    shortDescription: string,
    image: string
  }[]
}

export default function Home({continents}: HomeContinentProps) {
  return (
    <>
    <Head>
      <title>WorldTrip | Home</title>
    </Head>
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
      <ContinentSwiper continents={continents}/>
    </>
  )
}

export async function getStaticProps<GetStaticProps> () {
  const continentData = await api.get("/continents").then(response => response.data);
  return {
    props: {
      continents: continentData
    }
  }

}