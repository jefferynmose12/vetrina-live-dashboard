import { Box, Typography } from '@mui/material';
import { HeadphonesOutlined } from '@mui/icons-material';
import MainCard from '../MainCard';
import Header from '../../components/reuseable/Header';
import { Colors } from '../../assets/Colors';
import { Person } from './icon/Icons';

export const Customer = () => {

    const styles = {
        icon : {
            fontSize : 30
        },
        main : {
            py : 1.8,
            display : 'flex',
            alignItems : 'center',
            gap : 2
        },
        text : {
            fontSize : 13,
            color : Colors.contentText
        },
        btn : {
            width : '150px',
            height : '40px',
            fontSize : 12,
            color : 'white',
            backgroundColor : Colors.primary,
            borderRadius : 4,
            borderStyle : 'none',
            boxShadow : '1px 2px 6px 1px rgba(0,0,0,.1)',
        }
    }

    return ( 
        <MainCard width='100%' height='140px' bg='white'>
            <Header icon={<HeadphonesOutlined sx={styles.icon} />} title='Customer Support' />
            <Box sx={styles.main}>
                <Person />
                <Typography sx={styles.text}>
                    Simone is here to help you.
                </Typography>
            </Box>
            <button style={styles.btn}>
                Contact us
            </button>
        </MainCard>
    )
}