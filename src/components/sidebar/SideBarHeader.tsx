import { useContext } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { UIContext } from '../../context/UIProvider';
import { Colors } from '../../assets/Colors';

function SideBarHeader() {

    const { drawerOpen, handleDrawer } = useContext(UIContext)

    const styles = {
        contain : {
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'space-between',
            padding : '12px'
        },
        title : {
            pl : '20px',
            display: drawerOpen ? 'block' : 'none',
            fontSize: 19,
            fontWeight: 600
        },
        span : {
            color : Colors.primary,
        },
        icon : {
            pl : drawerOpen ? '0px' : '2.5px',
        }
    }

    return (
        <Box sx={styles.contain}>
            <Typography variant='h6' sx={styles.title} data-testid='header-logo'>vetrina<span style={styles.span}>live</span></Typography>
            <IconButton onClick={handleDrawer} data-testid='btn-header'>
                <MenuIcon sx={styles.icon} />
            </IconButton>
        </Box>
    )
}

export default SideBarHeader