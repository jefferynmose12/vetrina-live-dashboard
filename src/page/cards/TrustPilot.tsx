import { Box, Typography } from '@mui/material';
import MainCard from '../MainCard';
import Header from '../../components/reuseable/Header';
import { Colors } from '../../assets/Colors';
import { StarGreen } from './icon/Icons';

export const TrustPilot = () => {

    const styles = {
        main : {
            py : 2.5,
        },
        text : {
            fontSize : 14,
            fontWeight : 500,
            color : 'white',
            fontFamily : 'Noto Sans HK'
        },
        span : {
            color : Colors.order
        }
    }

    return ( 
        <MainCard width='100%' height='175px' link='Write a review on Trustpilot' icon={true} colorText={true} bg={Colors.dark}>
            <Header icon={<StarGreen />} title='Trustpilot' colorText={true} />
            <Box sx={styles.main}>
                <Typography sx={styles.text}>
                    Show us your love by leaving a <span style={styles.span}>positive</span> review on trust 
                    pilot and receive the extension of 50 additional products
                </Typography>
            </Box>
        </MainCard>
    )
}