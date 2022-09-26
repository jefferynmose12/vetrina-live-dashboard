import { Box, Typography } from '@mui/material';
import MainCard from '../MainCard';
import Header from '../../components/reuseable/Header';
import { Colors } from '../../assets/Colors';
import { ExtensionIcon, WorldIcon } from './icon/Icons';
import CardBox from '../../components/reuseable/CardBox';


export const Extension = () => {

    const styles = {
        divide : {
            maxWidth : '100%',
            py : 2,
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'space-between',
            gap : 3,
            overflowX: 'scroll',
            '&::-webkit-scrollbar': {
                width: '0.2em',
                height: '0.2em'
            },
            '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            },
        },
        content : {
            color : 'white',
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center'
        },
        headtext : {
            fontSize : 33,
            fontWeight : 600
        },
        span : {
            marginTop : '-10px',
            fontSize : 19
        }
    }

    return (
        <MainCard wide='50%' width='57%' pr={true} height='260px' link='Discover all extensions' icon={true} bg='white'>
            <Header icon={<ExtensionIcon />} title='Extensions Marketplace' />
            <Box sx={styles.divide}>
                <CardBox background={Colors.primaryOrange} text='Connect your own domain'>
                    <WorldIcon />
                </CardBox>
                <CardBox background={Colors.order} text='50 Additional Products' position='relative'>
                    <Box sx={styles.content}>
                        <Typography sx={styles.headtext}>+50</Typography>
                        <span style={styles.span}>prodotti</span>
                    </Box>
                </CardBox>
            </Box>
        </MainCard>
    )
}