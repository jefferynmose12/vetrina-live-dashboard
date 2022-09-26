import {useContext} from 'react'
import { UIContext } from '../../context/UIProvider';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import { Colors } from '../../assets/Colors';

export const SubList =({sublist} : any) => {

    const { subListOpen } = useContext(UIContext)

    const styles = {
        back : {
            background : Colors.secondary
        },
        text : {
            pl: 7.8,
            color : Colors.listText
        }
    }

    return (
        <>
            {
                sublist && (
                    <Collapse in={subListOpen} timeout="auto" unmountOnExit sx={styles.back}>
                        <List component="div" disablePadding>
                            {sublist.map((sub : any) => (
                                <ListItemButton key={sub} sx={styles.text}>
                                    <ListItemText primary={sub} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                )
            }
        </>
    )
}