import { Box, Typography } from '@mui/material';
import { PeopleAltOutlined } from '@mui/icons-material';
import MainCard from '../MainCard';
import Header from '../../components/reuseable/Header';
import { Colors } from '../../assets/Colors';

export const Friend = () => {

    const styles = {
        icon : {
            fontSize : 30
        },
        main : {
            py : 2.5,
        },
        text : {
            fontSize : 14,
            fontWeight : 500,
            color : Colors.contentText,
            fontFamily : 'Noto Sans HK'
        },
        span : {
            color : Colors.order
        }
    }

    return ( 
        <MainCard width='100%' height='175px' link='Write a review on Trustpilot' icon={true} bg='white'>
            <Header icon={<PeopleAltOutlined sx={styles.icon} />} title='Invite Friend' />
            <Box sx={styles.main}>
                <Typography sx={styles.text}>
                    <span style={styles.span}>Receive 50 products</span> by inviting a friend who subscribes 
                    to a plan. Your friend will receive a 30% discount coupon 
                    valid for any plan.
                </Typography>
            </Box>
        </MainCard>
    )
}