import Head from "next/head";
import Navbar from "../components/Navbar";
import { Avatar, Grid, IconButton, Tooltip, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { useState, useEffect } from "react";
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Perfil () {
    
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
            <title>Perfil</title>
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
            <div className="perfilhub">
            {data.map((e) => (
                <Tooltip title="Clique para alterar a foto de perfil" placement="top" arrow>
                <Avatar
                    className="perfilicone"
                    alt="Perfil"
                    src={e.profile}
                    sx={{ width: 250, height: 250 }}

                /> 
                </Tooltip>
                ))}
                {data.map((e) => (
                    <p className="acronym">{e.acronym}</p>
                ))}
                
            </div>
        </Grid>
        
        {data.map((e) => (
                <Grid item>
                    <TextField
                        sx={{ width: '21vh' }}
                        id="outlined-read-only-input"
                        label="E-mail"
                        defaultValue={e.email}
                        className="inputPerfil"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                ))}
        {data.map((e) => (
                <Grid item>
                <TextField
                    sx={{ width: '18vh' }}
                    id="outlined-read-only-input"
                    label="Data de Nascimento"
                    defaultValue={e.birthdate}
                    className="inputPerfil"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                </Grid>
        ))}
        {data.map((e) => (
                <Grid item>
                <TextField
                    sx={{ width: '40vh' }}
                    id="outlined-read-only-input"
                    label="Nome"
                    defaultValue={e.name}
                    className="inputPerfil"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                </Grid>
        ))}
        </Grid>
        </Grid>
        </div>
    );
}

export default Perfil;