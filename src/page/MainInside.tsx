import { Box, Grid } from '@mui/material';
import { Configure } from './cards/Configure';
import { Customer } from './cards/Customer';
import { Friend } from './cards/Friend';
import { Order } from './cards/Order';
import { Product } from './cards/Product';
import { TrustPilot } from './cards/TrustPilot';
import { Visitor } from './cards/Visitor';
import { Extension } from './cards/Extension';
import { LatestNews } from './cards/LatestNews';

function MainInside() {

  const styles = {
    mW : {
      maxWidth : '100%'
    },
    colRow : {
      maxWidth : '100%',
      display : 'flex',
      flexDirection : 'column',
      gap : 3,
    },
    row : {
      width : '100%',
      display : 'flex',
      gap : 3,
    },
    col : {
      ml : 3,
      maxWidth : '100%',
      display : 'flex',
      flexDirection : 'column',
      gap : 3,
    }
  }

  return (
    <Grid container sx={styles.mW}>
      <Grid item xs={8} sx={styles.mW}>
        <Box sx={styles.colRow}>
          <Box sx={styles.row}>
            <Visitor />
            <Order />
          </Box>
          <Box sx={styles.row}>
            <Product />
            <Extension />
          </Box>
          <Box sx={styles.row}>
            <LatestNews />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4} sx={styles.mW}>
        <Box sx={styles.col}>
          <Configure />
          <TrustPilot />
          <Friend />
          <Customer />
        </Box>
      </Grid>
    </Grid>
  )
}

export default MainInside