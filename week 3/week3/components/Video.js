import StarOutlineIcon from '@mui/icons-material/StarOutline';

function Video (props) {
    return (
        <div className="videobox">
            <img class="thumbnail" src={props.thumbnail} />
            <div class="descricao">
                <img class="iconpost" src={props.icon}/>
                <p class="textodescricao">{props.titulo}</p>
                <StarOutlineIcon className="favoritestar" color="warning"/>

            </div>
        </div>
    );
}

export default Video;