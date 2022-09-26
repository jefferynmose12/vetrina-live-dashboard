import { Box, Typography } from '@mui/material';
import MainCard from '../MainCard';
import { RemoveRedEyeOutlined } from '@mui/icons-material';
import Header from '../../components/reuseable/Header';
import { Colors } from '../../assets/Colors';

export const Visitor = () => {

    const styles = {
        icon : {
            fontSize : 30
        },
        main : {
            py : 2.8,
        },
        text : {
            fontSize : 32,
            fontWeight : 600,
            color : Colors.contentText
        }
    }

    return (
        <MainCard wide='100%' width='50%' height='145px' link='Do you want more visits? Contact us!' icon={true} bg='white'>
            <Header icon={<RemoveRedEyeOutlined sx={styles.icon} />} title='Visitors' select={true} />
            <Box sx={styles.main}>
                <Typography sx={styles.text}>
                    1824
                </Typography>
            </Box>
        </MainCard>
    )
}