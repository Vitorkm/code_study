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


function Navbar () {

    return (
    <div class="navbar">
        <div class="neoimg">
        <img src="https://intranetneo.certi.org.br/neo.svg" width={'200px'}/>
        </div>

        <div>
            <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        >
        <ListItemButton>
            <ListItemIcon >
            <HomeOutlinedIcon  color="warning"/>
            </ListItemIcon>
            <ListItemText style={{color: '#ed6c02'}} primary="Home"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
            <StarOutlinedIcon  color="warning"/>
            </ListItemIcon>
            <ListItemText style={{color: '#ed6c02'}} primary="Favoritos" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
            <HistoryOutlinedIcon  color="warning"/>
            </ListItemIcon>
            <ListItemText style={{color: '#ed6c02'}} primary="Histórico"/>
        </ListItemButton>
        </List>
    </div>


    </div>
);}

export default Navbar;