import Head from "next/head";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import { Grid, ListItem } from "@mui/material";
import Video from "../components/Video";
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from "react";
import axios from "axios";

function Favorites () {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/videos/')
        .then((resp) => {
            setData(resp.data);
        })
    }, []);


    const titulos = []

    return (
        <div>
        <Head>
            <title>Favoritos</title>
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
            <div class="favorito">
            <Button color="warning" variant="contained" className="favoriteicon" disableElevation startIcon={<StarIcon />}>Favoritos</Button>
            <Button color="warning" variant="outlined" className="resetfav">Resetar Favoritos</Button>
            </div>
            <div className="gridvideo">
            <Grid className="video"
                container 
                direction="row"
                alignItems="flex-start"
                >
                {data.filter((video) => (video.star == true)).map((video) => (
                    <Grid item xs={4}>
                    <Video key={video.id} fav={video.star} titulo={video.title} icon={video.icon} thumbnail={video.thumbnail} acess={video.id}/>
                    </Grid>
                ))}
            </Grid>
            </div>
        </Grid>
        </Grid>
        </div>
    );
}


export default Favorites;