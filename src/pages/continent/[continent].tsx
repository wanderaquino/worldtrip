import Head from "next/head"
import { Header } from "../../components/Header"

export default function Continent () {
    return (
    <>
        <Head>
            <title>WorldTrip | Home</title>
        </Head>
        <Header isContinentPage={true}/>
    </>
    )
}