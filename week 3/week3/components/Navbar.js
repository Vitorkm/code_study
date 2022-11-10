import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { width } from '@mui/system';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

function Navbar () {

    

    return (
    <div className="navbar">
        <div className="neoimg">
        <img src="https://intranetneo.certi.org.br/neo.svg" width={'90%'}/>
        </div>

        <div className="navButtons">
            <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        >
        <ListItemButton onClick={() => {location.href = 'http://localhost:3000/mockup'}}>
            <ListItemIcon >
            <HomeOutlinedIcon  color="warning"/>
            </ListItemIcon>
            <ListItemText style={{color: '#ed6c02'}} primary="Home"/>
        </ListItemButton>
        <ListItemButton onClick={() => {location.href = 'http://localhost:3000/favorites'}}>
            <ListItemIcon>
            <StarOutlinedIcon  color="warning"/>
            </ListItemIcon>
            <ListItemText style={{color: '#ed6c02'}} primary="Favoritos" />
        </ListItemButton>
        <ListItemButton onClick={() => {location.href = 'http://localhost:3000/historic'}}>
            <ListItemIcon>
            <HistoryOutlinedIcon  color="warning"/>
            </ListItemIcon>
            <ListItemText style={{color: '#ed6c02'}} primary="Histórico"/>
        </ListItemButton>
        </List>
    </div>
    <div className="buttonAdd">
    <IconButton aria-label="add" color="warning" className="addvideo" >
        <AddCircleIcon sx={{ width: 65, height: 65 }}  onClick={() => {location.href = 'http://localhost:3000/upload'}}/>
    </IconButton>
    </div>
    </div>
);}

export default Navbar;