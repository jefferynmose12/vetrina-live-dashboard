import { Box, Skeleton, Grid } from '@mui/material';

function LoadOne() {

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
        textone : {
            width : 80,
            height : 25
        },
        texttwo : {
            width : 140,
            height : 40
        },
        textthree : {
            width : 100,
            height : 25
        }
    }

    return (
        <Grid item xs={6} sx={styles.one}>
            <Box sx={styles.box}>
                <Skeleton variant='rectangular' sx={styles.img} />
                <Box sx={styles.second}>
                    <Skeleton variant='text' sx={styles.textone} />
                    <Skeleton variant='text' sx={styles.texttwo} />
                    <Skeleton variant='text' sx={styles.textthree} />
                </Box>
            </Box>
        </Grid>
    )
}

export default LoadOne