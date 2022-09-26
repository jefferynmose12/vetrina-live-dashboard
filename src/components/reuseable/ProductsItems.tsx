import { Box } from '@mui/material';
import useFetch from '../../custom-fetch/useFetch';
import LoadingState from './LoadingState';
import ProductSection from './ProductSection';

export default function ProductsItems() {

    const url = "https://fakestoreapi.com/products";

    const { data, loading } = useFetch(url);

    const styles = {
        whole : {
            maxWidth : '100%',
            pt : 0.8,
            pb : 0.6
        }
    }

    return (
        <Box sx={styles.whole}>
            {
                loading ? <LoadingState /> : <ProductSection products={data} />
            }
        </Box>
    )
}