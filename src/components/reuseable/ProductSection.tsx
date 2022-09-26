import SingleProduct from './SingleProduct';
import { Grid } from '@mui/material';

export default function ProductSection({products} : any) {

    const styles = {
        whole : {
            maxWidth : '100%',
            pt : 0.8,
            pb : 0.6
        }
    }

    return (
        <>
            <Grid container sx={styles.whole}>
                {
                    products?.slice(0, 8).map((item : any, index : any) => (
                        <SingleProduct 
                            key={index}
                            id={index}
                            category={item.category}
                            image={item.image}
                            description={item.description}
                        />
                    ))
                }   
            </Grid>
        </>
    )
}