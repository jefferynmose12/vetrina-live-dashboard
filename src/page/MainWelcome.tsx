import { Box, Typography, Link } from '@mui/material';
import { BiLinkExternal } from 'react-icons/bi';

export const MainWelcome = () => {

    const styles = {
        contain : {
            background : 'linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)',
            height : 240,
            px : 5,
        },
        inside : {
            pt : 7.5,
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'space-between',
        },
        text : {
            fontWeight : 500,
            color : 'white',
            fontFamily : 'Source Sans Pro'
        },
        link : {
            display : 'flex',
            alignItems : 'center',
            gap : 1.5,
            color : 'white',
        },
        linkText : {
            fontSize : 17,
            fontFamily : 'Noto Sans HK'
        },
        icon : {
            fontSize : 21,
        }
    }

    return (
        <Box sx={styles.contain}>
            <Box sx={styles.inside}>
                <Typography variant='h4' sx={styles.text}>
                    Welcome Mario!
                </Typography>
                <Box sx={styles.link}>
                    <Link href="#" color="inherit" sx={styles.linkText}>
                        app.vetrinalive.it/fenoh-store
                    </Link>
                    <BiLinkExternal style={styles.icon} />
                </Box>
            </Box>
        </Box>
    )
}