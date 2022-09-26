import { Box, Typography } from '@mui/material';
import { CardBoxProps } from '../../type';


function CardBox( {children, text, background, position} : CardBoxProps) {

    const styles = {
        col : {
            display : 'flex',
            flexDirection : 'column',
            gap : 1,
            maxWidth : '45%',
            position : position ? 'relative' : 'static',
            left : 20
        },
        box : {
            height : 120,
            width : '100%',
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            background,
            borderRadius : 1.5,
        },
        text : {
            width : '90%',
            fontSize : 16,
            fontFamily : 'Source Sans Pro'
        }
    }

    return (
        <Box sx={styles.col}>
            <Box sx={styles.box}>
                {children}
            </Box>
            <Typography sx={styles.text}>
                {text}
            </Typography>
        </Box>
    )
}

export default CardBox