import { Box, Link } from '@mui/material';
import MainCard from '../MainCard';
import { DescriptionOutlined } from '@mui/icons-material';
import { BiLinkExternal } from 'react-icons/bi'
import { Colors } from '../../assets/Colors';
import ProductsItems from '../../components/reuseable/ProductsItems';
import Header from '../../components/reuseable/Header';

export const LatestNews = () => {

    const styles = {
        icon : {
            fontSize : 30
        },
        link : {
            display : 'flex',
            alignItems : 'center',
            gap : 1.2,
            color : Colors.primary,
        },
        linkText : {
            fontSize : 16,
        },
        icontwo : {
            fontSize : 18,
        },
        divide : {
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'space-between'
        }
    }

    return (
        <MainCard wide='100%' width='auto' height='auto' bg='white'>
            <Box sx={styles.divide}>
                <Header icon={<DescriptionOutlined sx={styles.icon} />} title='Lastest News' />
                <Box sx={styles.link}>
                    <Link href="#" color="inherit" sx={styles.linkText}>
                        visit our blog
                    </Link>
                    <BiLinkExternal style={styles.icontwo} />
                </Box>
            </Box>
            <ProductsItems />
        </MainCard>
    )
}