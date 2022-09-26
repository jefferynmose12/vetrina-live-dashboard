import { Grid } from '@mui/material';
import LoadOne from './LoadOne';

export default function LoadingState() {

    const styles = {
        whole : {
            maxWidth : '100%',
            pt : 0.8,
            pb : 0.6
        },
    }

    return (
        <Grid container sx={styles.whole}>
            <LoadOne />
            <LoadOne />
            <LoadOne />
            <LoadOne />
            <LoadOne />
            <LoadOne />
            <LoadOne />
            <LoadOne />
        </Grid>
    )
}