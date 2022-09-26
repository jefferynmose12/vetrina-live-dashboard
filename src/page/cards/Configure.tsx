import { Box, Typography } from '@mui/material';
import MainCard from '../MainCard';
import { GrConfigure } from 'react-icons/gr';
import Header from '../../components/reuseable/Header';
import { Colors } from '../../assets/Colors';

export const Configure = () => {

    const styles = {
        icon : {
            fontSize : 25
        },
        main : {
            pt : 2,
            pb : 1.5,
        },
        num : {
            fontSize : 35,
            fontWeight : 700,
            color : Colors.primaryOrange
        },
        numtext : {
            marginTop : '-10px',
            fontSize : 15,
            fontWeight : 600,
            color : Colors.primaryOrange
        },
        text : {
            mt : 2,
            fontSize : 14,
            fontWeight : 500,
            fontFamily : 'Noto Sans HK',
            color : Colors.contentText
        }
    }

    return ( 
        <MainCard width='100%' height='220px' link='Complete the setup!' icon={true} bg='white'>
            <Header icon={<GrConfigure style={styles.icon} />} title='Configure your shop' />
            <Box sx={styles.main}>
                <Box>
                    <Typography sx={styles.num}>
                        45% 
                    </Typography>
                    <Typography sx={styles.numtext}>
                        Completed 
                    </Typography>
                </Box>

                <Typography sx={styles.text}>
                    Complete all the steps to have 
                    a complete shop to best present to your customers. 
                </Typography>
            </Box>
        </MainCard>
    )
}