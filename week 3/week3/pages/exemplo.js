import Head from "next/head";
import Card from "../components/Cards";
import { useState } from "react";
import { useEffect } from "react";

function Exemplo() {
    
    // const num = 1;
    const [num, setNum] = useState(1);

    // const mudaNum = () => {
    //     setNum(num + 1);
    //     console.log(num);
    // };
    useEffect(() => {
        // console.log(5);
        
    }, [] );
    

    return (
        <div>
        {/* <Head>
            <title>Exemplo</title>
        </Head>
        <h1>NEO</h1> */}
        <Card sigla="VKM">Vitor</Card>
        <button onClick={() => {setNum(num + 1)}}>Click</button>
        <p>{num}</p>
        {/* <Card sigla="FBT" nome="Fernando" />
        <Card sigla="JPT" nome="Joao" /> */}

        </div>
    );
}

export default Exemplo;