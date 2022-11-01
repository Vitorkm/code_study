import Head from "next/head";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import { Grid } from "@mui/material";
import Video from "../components/Video";


function Page() {

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
            <Searchbar/>
            <div className="gridvideo">
            <Grid className="video"
                container item
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                >
                <Video/>
                <Video/>
                <Video/>
            </Grid>
            <Grid className="video"
                container item
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                >
                <Video/>
                <Video/>
                <Video/>
            </Grid>
            <Grid className="video"
                container item
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                >
                <Video/>
                <Video/>
                <Video/>
            </Grid>
            </div>
        </Grid>
        </Grid>
        </div>
    )
}

export default Page;