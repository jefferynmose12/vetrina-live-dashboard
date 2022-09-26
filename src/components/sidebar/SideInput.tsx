import { Box, Select, InputLabel, Typography, FormControl } from '@mui/material';

export default function BasicSelect() {

    const styles = {
        contain : {
            mt : 6,
            mb : 4,
            px : 3
        },
        title : {
            fontSize : 16,
            mb : 1.5,
        }
    }

  return (
    <Box sx={styles.contain}>
        <Typography sx={styles.title}>Select your shop</Typography>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">John Store</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
            />
        </FormControl>
    </Box>
  );
}
