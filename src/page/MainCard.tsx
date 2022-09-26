import { Box, Link } from '@mui/material';
import { CardsProps } from '../type';
import { BsArrowRightShort } from 'react-icons/bs'
import { Colors } from '../assets/Colors';

export default function MainCard({children, bg, width, wide, pr, link, icon, height, colorText} : CardsProps) {

    const styles = {
        card : {
            overflow : 'hidden',
            background : bg,
            borderRadius : 2,
            width : wide,
            maxWidth : width,
            height : height,
            py : 2.2,
            pl : 2.3,
            pr : pr ? 0 : 2.3,
            boxShadow : '1px 2px 6px 1px rgba(0,0,0,.1)',
        },
        link : {
            display : 'flex',
            alignItems : 'center',
            gap : 1.5,
            color : colorText ? Colors.order : Colors.primary,
        },
        linkText : {
            fontSize : 12.5,
        },
        icon : {
            fontSize : 22,
        }
    }

    return (
        <Box sx={styles.card}>
            {children}
            {
                link &&
                (
                    <Box sx={styles.link}>
                        <Link href="#" color="inherit" sx={styles.linkText}>
                            {link}
                        </Link>
                        {icon && <BsArrowRightShort style={styles.icon} />}
                    </Box>
                )
            }
        </Box>
    )
}