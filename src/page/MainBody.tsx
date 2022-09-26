import Box from '@mui/material/Box';
import { Colors } from '../assets/Colors';
import MainInside from './MainInside';

function MainBody() {

    const styles = {
        main : {
            backgroundColor : Colors.body,
            minHeight : 50,
            px : 5,
            maxWidth : '100%'
        },
        inside : {
            position : 'relative',
            top : -60,
            maxWidth : '100%'
        }
    }

    return (
        <Box sx={styles.main}>
            <Box sx={styles.inside}>
                <MainInside />
            </Box>
        </Box>
    )
}

export default MainBody