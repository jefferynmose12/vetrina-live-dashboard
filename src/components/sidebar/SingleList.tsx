import { useContext } from 'react'
import { Avatar, Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { UIContext } from '../../context/UIProvider';
import { SingleListProps } from '../../type';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SubList } from './SubList';
import { Colors } from '../../assets/Colors';
import { Link } from "react-router-dom";


export const SingleList = ({icon, text, path, badge, arrowdown, sublist} : SingleListProps) => {
  
  const { drawerOpen, subListOpen, setSubListOpen, title, setTitle } = useContext(UIContext)

  const styles = {
    item : {
      display: 'block',
      borderLeft: text === title ? '4px solid #21B8F9' : '4px solid white',
    },
    button : {
      minHeight: 48,
      justifyContent: drawerOpen ? 'initial' : 'center',
      px: 2.5,
      ml: 0.6,
      background : text === title ? Colors.hover : '',
    },
    icon : {
      minWidth: 0,
      mr: drawerOpen ? 1 : 'auto',
      justifyContent: 'center',
      color: text === title ? Colors.primary : Colors.listText,
    },
    text : {
      display: drawerOpen ? 'block' : 'none',
      pl : 0.8,
      color: text === title ? Colors.primary : Colors.listText,
      fontFamily : 'Noto Sans HK'
    },
    right : {
      display: drawerOpen ? 'block' : 'none',
    },
    avatar : {
      background: Colors.order, 
      width: 24, 
      height: 24,
      fontSize: '12px',
    }
  }

  const handleClick = () => {
    if(sublist){
      setSubListOpen(!subListOpen);
    } else {
      setSubListOpen(false);
    }
    setTitle(text)
  }

  const arrow = subListOpen ? <ExpandLess /> : <ExpandMore />

  return (
    <ListItem disablePadding sx={styles.item}>
      <Link 
        style={{ textDecoration: 'none', color: 'black'}} 
        to={path}
      >
        <ListItemButton sx={styles.button} onClick={handleClick} data-testid={text}>
          <ListItemIcon sx={styles.icon}>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} sx={styles.text} />

          <Box sx={styles.right} data-testid='div-items'>
            {badge && <Avatar sx={styles.avatar}>14</Avatar>}
            {arrowdown && <ExpandMore />}
            {sublist && arrow}
          </Box>
        </ListItemButton>
      </Link>
      
      {drawerOpen && <SubList sublist={sublist} />}
    </ListItem>
  )
}