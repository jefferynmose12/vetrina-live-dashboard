import { Box, Typography } from '@mui/material';
import { ButtonPlayProps } from '../../type';

export default function ButtonPlay({ icon, text} : ButtonPlayProps) {
    
    const styles = {
        btn : {
            cursor : 'pointer',
            width : '50%',
            background : 'black',
            border : '2px solid grey',
            borderRadius : 2,
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            gap : 1,
            py : 0.6
        },
        btnText : {
            display : 'flex',
            flexDirection : 'column',
            color : 'white'
        },
        span : {
            fontSize : 8,
        },
        btnMainText : {
            fontSize : 16,
        }
    }

    return (
        <Box sx={styles.btn}>
            {icon}
            <Box sx={styles.btnText}>
                <span style={styles.span}>Disponibile su</span>
                <Typography sx={styles.btnMainText}>
                    {text}
                </Typography>
            </Box>
        </Box>
    )
}