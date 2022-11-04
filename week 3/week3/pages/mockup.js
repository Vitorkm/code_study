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
            <Searchbar loginicon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh"/>
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
                {data.map((video) => (
                    <Grid item xs={4}>
                    <Video key={video.id} titulo={video.title} icon={video.icon} thumbnail={video.thumbnail}/>
                    </Grid>
                ))}
                {/* <Grid item xs={4}>
                <Video titulo="teste 12345" icon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh" thumbnail="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"/>
                </Grid>
                <Grid item xs={4}>
                <Video titulo="teste" icon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh" thumbnail="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"/>
                </Grid>
                <Grid item xs={4}>
                <Video titulo="teste" icon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh" thumbnail="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"/>
                </Grid>
                <Grid item xs={4}>
                <Video titulo="teste" icon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh" thumbnail="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"/>
                </Grid>
                <Grid item xs={4}>
                <Video titulo="teste" icon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh" thumbnail="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"/>
                </Grid>
                <Grid item xs={4}>
                <Video titulo="teste" icon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh" thumbnail="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"/>
                </Grid>
                <Grid item xs={4}>
                <Video titulo="teste" icon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh" thumbnail="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"/>
                </Grid> */}
            </Grid>
        </div>
        </Grid>
        </Grid>
    </div>
    );
}

export default Page;