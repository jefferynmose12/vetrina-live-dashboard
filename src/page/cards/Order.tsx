import { Box } from '@mui/material';
import MainCard from '../MainCard';
import { TocOutlined } from '@mui/icons-material';
import Header from '../../components/reuseable/Header';
import { Colors } from '../../assets/Colors';
import OrderExtension from '../../components/reuseable/OrderExtension';

export const Order = () => {

    const styles = {
        icon : {
            fontSize : 30
        },
        main : {
            py : 2.3,
            display : 'flex',
            flexDirection : 'column',
            gap: 1,
        },
        text : {
            fontSize : 32,
            fontWeight : 600,
            color : Colors.contentText
        }
    }

    return (
        <MainCard wide='100%' width='50%' height='145px' link='10 free tips to increase your sales' bg='white'>
            <Header icon={<TocOutlined sx={styles.icon} />} title='Orders' select={true} />
            <Box sx={styles.main}>
                <OrderExtension
                    item='Orders received'
                    amount='156'
                />
                <OrderExtension
                    item='Earnings'
                    amount='€ 1893,24'
                />
            </Box>
        </MainCard>
    )
}