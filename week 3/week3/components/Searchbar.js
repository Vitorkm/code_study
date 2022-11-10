import { useSlotProps } from '@mui/base';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Button from '@mui/material/Button';
import { useState } from 'react';



function Searchbar (props) {
    
    return (
        <div>
            <div className="searchbar">
                <div className="infobox">
                        {/* <input type="search" onChange={props.setData(props.data.filter((video) => (video.title.includes(search))))} id="search" placeholder="Search" /> */}
                        <input type="search" onChange={(e) => props.setSearch(e.target.value)} id="search" placeholder="Search" />
                </div>
                <img className="icon" src={props.loginicon} onClick={() => {location.href = 'http://localhost:3000/perfil'}} width={'50px'}/>
            </div>
            
        </div>
    );
}

export default Searchbar;