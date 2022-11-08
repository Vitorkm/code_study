import Head from "next/head";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import { Grid } from "@mui/material";
import Video from "../components/Video";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import axios from "axios";

function Page() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        axios.get('http://localhost:8000/api/videos/')
        .then((resp) => {
            setData(resp.data);
        })
    }, []);


    const filters = ['Data Science', 'Desenvolvimento Web', 'Power B.I.']



    return (
        <div>
        <Head>
            <title>Tela Inicial</title>
        </Head>
        <Grid container 
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch">
        <Grid item xs={2}>
            <Navbar />
        </Grid>
        <Grid item xs={10}>
            <Searchbar search={search} setSearch={setSearch} loginicon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh"/>
            <div class="filters">
            <Button variant="outlined" className="filtersb">Tudo</Button>
            <Button variant="outlined" className="filtersb">Data Science</Button>
            <Button variant="outlined" className="filtersb">Power B.I.</Button>
            <Button variant="outlined" className="filtersb">Desenvolvimento Web</Button>
            </div>
            <div className="gridvideo">
            <Grid className="video"
                container
                direction="row"
                alignItems="flex-start"
                >
                {data.filter((e) => e.title.toLowerCase().includes(search.toLowerCase())).map((video) => (
                    <Grid item xs={4}>
                    <Video 
                        key={video.id} 
                        fav={video.star} 
                        titulo={video.title} 
                        icon={video.icon} 
                        thumbnail={video.thumbnail} 
                        acess={video.id}
                    />
                    </Grid>
                ))}
            </Grid>
        </div>
        </Grid>
        </Grid>
    </div>
    );
}

export default Page;