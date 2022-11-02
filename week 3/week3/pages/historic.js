import Head from "next/head";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import { Grid } from "@mui/material";
import Video from "../components/Video";
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';

function Historic () {
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
            <Searchbar loginicon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh"/>
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
                </Grid>
                <Grid item xs={4}>
                <Video titulo="teste" icon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh" thumbnail="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"/>
                </Grid>
            </Grid>
            {/* <Grid className="video"
                container item
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                >

                <Video titulo="teste" icon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh" thumbnail="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"/>
                <Video titulo="teste" icon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh" thumbnail="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"/>
                <Video titulo="teste" icon="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh" thumbnail="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"/>
            </Grid> */}
            {/* <Grid className="video"
                container item
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                > */}
                {/* <Video/>
                <Video/>
                <Video/> */}
            {/* </Grid> */}
            </div>
        </Grid>
        </Grid>
        </div>
    );
}


export default Historic;