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
import Modal from "../components/Modal";

function Upload () {
    
    const [modal, setModal] = useState("https://m.media-amazon.com/images/I/61B-tu9Gj2S._UY200__PKap-play-v1_.png");
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/members/')
        .then((resp) => {
            setData(resp.data);
        })
    }, []);


    const [tags, setTags] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");

    const handleUpload = () => {
        if (tags == "Nenhuma") {
            setTags("")
            };
    };

    const uploadVideo = () => {
        axios.post(`http://localhost:8000/api/videos/`, 
        { 
            "thumbnail" : modal,
            "title" : title,
            "icon" : "https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh",
            "star" : false,
            "tags" : tags,
            "seen" : false,
            "date" : date
        });
    };
    




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
                <img class="videoUpload" src={modal} /> 
                <div className="divUpload">
                    <Modal setModal={setModal} modal={modal}/>
                </div>
            </div>
        </Grid>
            <Grid item>
                <TextField
                    sx={{ width: '50vh' }}
                    id="outlined-required"
                    label="Título"
                    className="inputPerfil"
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid>
                <Grid item>
                <TextField
                    sx={{ width: '18vh' }}
                    id="outlined-required"
                    label="Data"
                    className="inputPerfil"
                    onChange={(e) => setDate(e.target.value)}
                />
                </Grid>
                <Grid item>
                <FormControl color="warning">
                <FormLabel id="tagsRadio">Tags:</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="tagsRadio"
                    name="radioGroup"
                    onChange={(e) => setTags(e.target.value)}
                >
                    <FormControlLabel value="Data Science" control={<Radio color="warning"/>} label="Data Science" />
                    <FormControlLabel value="Power B.I." control={<Radio color="warning"/>} label="Power B.I." />
                    <FormControlLabel value="Desenvolvimento Web" control={<Radio color="warning"/>} label="Desenvolvimento Web" />
                    <FormControlLabel value="Nenhuma" control={<Radio color="warning"/>} label="Nenhuma" />
                </RadioGroup>
                </FormControl>
                </Grid>
                <div className="finishUpload">
                <Button variant="outlined" color="warning" onClick={uploadVideo} className="finishUploadButton">Enviar Video</Button>
                </div>
        </Grid>
        </Grid>
        </div>
    );
}

export default Upload;