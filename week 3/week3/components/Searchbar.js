import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Button from '@mui/material/Button';


function Searchbar () {
    
    return (
        <div>
            <div class="searchbar">
                <div class="infobox">
                        <SearchOutlinedIcon className="searchicon" color="warning"/>
                        <input type="search" id="search" />
                </div>
                <img class="icon" src="https://drive.google.com/uc?export=view&id=1hiqLqtnkHHe3gSZ3hoz3fv8I7zjVcNoh" width={'50px'}/>
            </div>
            <div class="filters">
            <Button variant="outlined" className="filtersb">Tudo</Button>
            <Button variant="outlined" className="filtersb">Data Science</Button>
            <Button variant="outlined" className="filtersb">Power B.I.</Button>
            <Button variant="outlined" className="filtersb">Desenvolvimento Web</Button>
            </div>
        </div>
    );
}

export default Searchbar;