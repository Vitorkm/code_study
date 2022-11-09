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

function Upload () {
    
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
            <title>Upload</title>
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
            className="perfil"
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
                <Button variant="contained" color="warning" className="uploadButton">Upload Video</Button>
            </div>
        </Grid>
            <Grid item>
                <TextField
                    sx={{ width: '50vh' }}
                    id="outlined-required"
                    label="Título"
                    className="inputPerfil"
                    />
                </Grid>
                <Grid item>
                <TextField
                    sx={{ width: '18vh' }}
                    id="outlined-required"
                    label="Data"
                    className="inputPerfil"
                />
                </Grid>
                <Grid item>
                <FormControl color="warning">
                <FormLabel id="tagsRadio">Tags:</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="tagsRadio"
                    name="radioGroup"
                >
                    <FormControlLabel value="Data Science" control={<Radio color="warning"/>} label="Data Science" />
                    <FormControlLabel value="Power B.I." control={<Radio color="warning"/>} label="Power B.I." />
                    <FormControlLabel value="Desenvolvimento Web" control={<Radio color="warning"/>} label="Desenvolvimento Web" />
                    <FormControlLabel value="Nenhuma" control={<Radio color="warning"/>} label="Nenhuma" />
                </RadioGroup>
                </FormControl>
                </Grid>
                <div className="finishUpload">
                <Button variant="outlined" color="warning" className="finishUploadButton">Enviar Video</Button>
                </div>
        </Grid>
        </Grid>
        </div>
    );
}

export default Upload;