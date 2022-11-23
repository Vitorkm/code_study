import Head from "next/head";
import Navbar from "../components/Navbar";
import { Grid, IconButton, Avatar, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Videopage () {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/members/')
        .then((resp) => {
            setData(resp.data);
        })
    }, []);


    // const changeIcon = () => {
    //     {data.map((e) => (
        //axios.put(`http://localhost:8000/api/members/${e.id}/`, 
    //     { 
    //         "name" : {e.name},
    //         "acronym" : e.acronym,
    //         "birthdate" : e.birthdate,
    //         "star" : !(e.fav)
    //     });))}




    return (
        <div>
        <Head>
            <title>Video Page</title>
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
        <Grid item xs={1}>
            <IconButton aria-label="goback" className="back" onClick={() => {location.href = 'http://localhost:3000/mockup'}}>
                <ArrowBackIcon color="warning" />
            </IconButton> 
        </Grid>
        <Grid item xs={9}>
        <Grid container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            className="videopage"
            />
            
        <Grid item>
            <div className="profilediv">
            {data.map((e) => (
                <Avatar
                    src={e.profile}
                    sx={{ width: 50, height: 50 }}
                    className="perfilpicture"
                    onClick={() => {location.href = 'http://localhost:3000/perfil'}}
                />
                ))}
            </div>
            <div className="perfilhub">
                <img class="videoUpload" src='https://i.ytimg.com/vi/w3GV9pumczQ/maxresdefault.jpg' /> 
                <div className="divtitle">
                    <p className="videotitle">Título teste</p>
                    <img className="iconvideo" src="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh"  width={'50px'}/>
                </div>
            </div>
            
        </Grid>
            <Grid item className="descricaoVideo">
                <p className="descricaotitle">Descrição:</p>
                <p>Testando a descrição desse vídeo teste.</p>
                </Grid>
                <Grid item>
                
                </Grid>
        </Grid>
        </Grid>
        </div>
    );
}

export default Videopage;