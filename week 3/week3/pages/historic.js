import Head from "next/head";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import { Grid } from "@mui/material";
import Video from "../components/Video";
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { useState, useEffect } from "react";
import axios from "axios";

function Historic () {
    
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/videos/')
        .then((resp) => {
            setData(resp.data);
        })
    }, []);
    
    
    return (
        <div>
        <Head>
            <title>Histórico</title>
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
            <div class="favorito">
            <Button color="warning" variant="contained" className="favoriteicon" disableElevation startIcon={<StarIcon />}>Histórico</Button>
            <Button color="warning" variant="outlined" className="resetfav">Resetar Histórico</Button>
            </div>
            <div className="gridvideo">
            <Grid className="video"
                container
                direction="row"
                alignItems="flex-start"
                >
                {data.filter((video) =>  video.title.toLowerCase().includes(search.toLowerCase())).map((video) => (
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
// video.star == true &&

export default Historic;