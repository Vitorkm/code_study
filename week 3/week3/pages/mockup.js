import Head from "next/head";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

function Page() {

    return (
        <div>
        <Head>
            <title>Tela Inicial</title>
        </Head>
        <Navbar/>
        <Searchbar/>

        </div>
    )
}

export default Page;