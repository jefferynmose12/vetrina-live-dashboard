import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { RiFlashlightLine } from 'react-icons/ri'
import { MainHeaderProps } from '../type';
import { Colors } from '../assets/Colors';

export default function MainHeader({title} : MainHeaderProps) {

    const styles = {
        head : {
            position : 'sticky',
            top : 0,
            zIndex : 20,
            flexGrow: 1,
            background : 'white',
            py : 3,
            pr : 4.5,
            pl : 5,
            boxShadow : '1px 2px 1px rgba(0,0,0,.1)',
        },
        app : {
            height : 8,
            display : 'flex', 
            justifyContent : 'space-between',
            alignItems : 'center',
            color : Colors.contentText
        },
        title : {
            fontSize : '18px',
            fontWeight : 500,
            fontFamily : 'Noto Sans HK'
        },
        second : {
            display : 'flex',
            alignItems : 'center',
            gap : '3px',
        },
        icon : {
            fontSize : '22px',
        },
        new : {
            fontSize : '14px',
            fontFamily : 'Source Sans Pro'
        }
    }

    return (
        <Box sx={styles.head}>
            <Box sx={styles.app}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={styles.title}
                >
                    {title}
                </Typography>
                
                <Box>
                    <Badge badgeContent={2} color="error">
                        <Box sx={styles.second}>
                            <RiFlashlightLine style={styles.icon} />
                            <Typography
                                sx={styles.new}
                            >
                                What's new
                            </Typography>
                        </Box>
                    </Badge>
                </Box>
            </Box>
        </Box>
    );
}

// 
