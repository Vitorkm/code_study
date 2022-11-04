import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';

function Video (props) {

    

    return (
        <div className="videobox">
            <img class="thumbnail" src={props.thumbnail} />
            <div class="descricao">
                <div className="icontitle">
                <img class="iconpost" src={props.icon}/>
                <p class="textodescricao">{props.titulo}</p>
                </div>
                <Checkbox icon={<StarOutlineIcon color="warning"/>} checkedIcon={<StarIcon color="warning"/>}/>
            </div>
        </div>
    );
}

export default Video;