import { Box, Typography } from '@mui/material';
import { Colors } from '../../assets/Colors';
import { OrderExtensionProps } from '../../type';


function OrderExtension({item, amount} : OrderExtensionProps) {

    const styles = {
        contain : {
            display : 'flex',
            justifyContent : 'space-between',
            alignItems : 'center'
        },
        item : {
            fontSize : 16,
            color : Colors.LightTint,
        },
        amount : {
            fontSize : 17,
            fontWeight : 600,
            color : Colors.contentText,
        }
    }

    return (
        <Box sx={styles.contain}>
            <Typography sx={styles.item}>
                {item}:
            </Typography>
            <Typography sx={styles.amount}>
                {amount}
            </Typography>
        </Box>
    )
}

export default OrderExtension