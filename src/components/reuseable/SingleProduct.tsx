import { Box, Typography, Link, Grid } from '@mui/material';
import { Colors } from '../../assets/Colors';
import { ProductProps } from '../../type';

export default function SingleProduct({id, category, image, description} : ProductProps) {

    const styles = {
        one : {
            maxWidth : '100%',
            py : 2
        },
        box : {
            maxWidth : '100%',
            display : 'flex',
            gap : 1.3
        },
        img : {
            width : 85,
            height : 95
        },
        second : {
            display : 'flex',
            flexDirection : 'column',
            gap : 0.3
        },
        cat : {
            fontSize : 14,
            fontWeight : 600,
            color : Colors.primary
        },
        des : {
            fontSize : 14,
            fontWeight : 600,
            width : 170,
            color : Colors.contentText,
            fontFamily : 'Noto Sans HK'
        },
        id : {
            fontSize : 12,
            color : Colors.contentText
        }
    }

    return (
        <Grid item xs={6} sx={styles.one}>
            <Box sx={styles.box} data-testid={`product-item-${id}`}>
                <img src={image} alt='product-image' style={styles.img} />
                <Box sx={styles.second}>
                    <Typography sx={styles.cat}>{category}</Typography>
                    <Typography sx={styles.des}>{description.slice(0, 35)}</Typography>
                    <Link href="#" color="inherit" sx={styles.id}>
                        Estimated reading : {id}mins
                    </Link>
                </Box>
            </Box>
        </Grid>
    )
}