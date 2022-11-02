import { useSlotProps } from '@mui/base';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Button from '@mui/material/Button';


function Searchbar (props) {
    
    return (
        <div>
            <div class="searchbar">
                <div class="infobox">
                        <input type="search" id="search" placeholder="Search" />
                </div>
                <img class="icon" src={props.loginicon} width={'50px'}/>
            </div>
            
        </div>
    );
}

export default Searchbar;