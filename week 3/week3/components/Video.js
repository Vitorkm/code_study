import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import axios from "axios";

function Video (props) {


    const favFunction = () => {
        axios.put(`http://localhost:8000/api/videos/${props.acess}/`, 
        { 
            "thumbnail" : props.thumbnail,
            "title" : props.titulo,
            "icon" : props.icon,
            "star" : !(props.fav),
            "tags": props.tags,
            "seen": props.seen
        }).then(
            () => {
                axios.get('http://localhost:8000/api/videos/')
                .then((resp) => {
                    props.setData(resp.data);
                });
            }
        );

        
    }

    
    return (
        <div className="videobox">
            <img className="thumbnail" src={props.thumbnail} />
            <div className="descricao">
                <div className="icontitle">
                <img className="iconpost" src={props.icon}/>
                <p className="textodescricao">{props.titulo}</p>
                </div>
                <Checkbox checked={props.fav} onClick={favFunction}  className="favoritecheck" icon={<StarOutlineIcon color="warning"/>} checkedIcon={<StarIcon color="warning"/>}/>
            </div>
        </div>
    );
}

export default Video;