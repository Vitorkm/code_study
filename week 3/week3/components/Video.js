import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import axios from "axios";

function Video (props) {

    const [favorite, setFavorite] = useState(props.fav);

    const favFunction = () => {
        axios.put(`http://localhost:8000/api/videos/${props.acess}/`, 
        { 
            "thumbnail" : props.thumbnail,
            "title" : props.titulo,
            "icon" : props.icon,
            "star" : !(props.fav),
            "tags": props.tags,
            "seen": props.seen
        });
        setFavorite(!(props.fav));
    }

    return (
        <div className="videobox">
            <img class="thumbnail" src={props.thumbnail} onClick={() => {location.href = 'http://localhost:3000/videopage'}}/>
            <div class="descricao">
                <div className="icontitle">
                <img class="iconpost" src={props.icon}/>
                <p class="textodescricao">{props.titulo}</p>
                </div>
                <Checkbox checked={favorite} onClick={favFunction}  className="favoritecheck" icon={<StarOutlineIcon color="warning"/>} checkedIcon={<StarIcon color="warning"/>}/>
            </div>
        </div>
    );
}

export default Video;