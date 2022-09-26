import { Box, Typography, Link } from '@mui/material';
import MainCard from '../MainCard';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs'
import { Colors } from '../../assets/Colors';
import { Iphone } from './icon/Icons';
import { GooglePlay } from './icon/Icons';
import ButtonPlay from '../../components/reuseable/ButtonPlay';

export const Product = () => {

    const styles = {
        body : {
            display : 'flex',
            justifyContent : 'space-between',
            gap : 3,
            maxWidth : '100%',
        },
        mainText : {
            fontSize : 22,
            lineHeight : 1.2,
            color : 'white',
            fontFamily : 'Noto Sans HK'
        },
        link : {
            mt: 0.8,
            display : 'flex',
            alignItems : 'center',
            gap : 1.5,
            color : 'white'
        },
        linkText : {
            fontSize : 16,
        },
        icon : {
            fontSize : 22,
        },
        download : {
            mt : 2,
            maxWidth : '100%',
            display : 'flex',
            alignitems : 'center',
            gap : 2,
        },
        apple : {
            fontSize : 20,
            color : 'white'
        }
    }

    return ( 
        <MainCard wide='50%' width='43%' height='260px' bg={Colors.secondaryOrange}>
            <Box sx={styles.body}>
                <Box>
                    <Typography sx={styles.mainText}>
                        Sell your products on your 
                        exclusive APP published on the stores 
                    </Typography>
                    <Box sx={styles.link}>
                        <Link href="#" color="inherit" sx={styles.linkText}>
                            Show more
                        </Link>
                        <BsArrowRightShort style={styles.icon} />
                    </Box>
                </Box>
                <Iphone />
            </Box>
            <Box sx={styles.download}>
                <ButtonPlay icon={<BsApple style={styles.apple} />} text='App Store' />
                <ButtonPlay icon={<GooglePlay />} text='GooglePlay' />
            </Box>
        </MainCard>
    )
}