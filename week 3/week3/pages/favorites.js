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
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/videos/')
        .then((resp) => {
            setData(resp.data);
        })
    }, []);

    const resetFavorites = () => {

    }


    const titulos = []

    return (
        <div>
        <Head>
            <title>Favoritos</title>
        </Head>
        <Grid container 
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            className="total"
            >
        <Grid item xs={2}>
            <Navbar />
        </Grid>
        <Grid item xs={10}>
            <Searchbar search={search} setSearch={setSearch} loginicon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh"/>
            <div className="favorito">
            <Button color="warning" variant="contained" className="favoriteicon" disableElevation startIcon={<StarIcon />}>Favoritos</Button>
            <Button color="warning" variant="outlined" className="resetfav">Resetar Favoritos</Button>
            </div>
            <div className="gridvideo">
            <Grid className="video"
                container 
                direction="row"
                alignItems="flex-start"
                >
                {data.filter((video) => video.star == true && video.title.toLowerCase().includes(search.toLowerCase())).map((video) => (
                    <Grid item xs={4} className="container">
                    <Video 
                    key={video.id} 
                    fav={video.star} 
                    titulo={video.title} 
                    icon={video.icon} 
                    thumbnail={video.thumbnail} 
                    tags={video.tags}
                    seen={video.seen}
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


export default Favorites;