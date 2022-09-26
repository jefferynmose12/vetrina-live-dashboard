import { Box, Typography } from '@mui/material';
import { BiChevronDown } from 'react-icons/bi';
import { Colors } from '../../assets/Colors';
import { HeaderProps } from '../../type';

function Header({icon, title, select, colorText} : HeaderProps) {

    const styles = {
        box : {
            display : 'flex',
            justifyContent : 'space-between',
        },
        head : {
            display : 'flex',
            alignItems : 'center',
            gap : 1,
            color : Colors.contentText
        },
        headtext : {
            fontSize : 18,
            fontWeight : 600,
            fontFamily : 'Noto Sans HK',
            color : colorText ? 'white' : Colors.contentText
        },
        text : {
            fontSize : 15
        },
        select : {
            display : 'flex',
            alignItems : 'center',
            gap : 1,
            cursor : 'pointer',
            color : Colors.select
        },
        icon : {
            fontSize : 20
        }
    }

    return (
        <Box sx={styles.box}>
            <Box sx={styles.head}>
                {icon}
                <Typography sx={styles.headtext}>
                    {title}
                </Typography>
            </Box>
            {
                select && 
                (
                    <Box sx={styles.select}>
                        <Typography sx={styles.text}>
                            This month
                        </Typography>
                        <BiChevronDown style={styles.icon}/>
                    </Box>
                )
            }
        </Box>
    )
}

export default Header