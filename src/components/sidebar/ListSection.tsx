import { useContext } from 'react'
import { List, Divider } from '@mui/material';
import { UIContext } from '../../context/UIProvider';
import { ItemsOne, ItemsTwo } from '../../assets/Items';
import { SingleList } from './SingleList';
import { SingleListProps } from '../../type';
import SideInput from './SideInput';

export const ListSection = () => {

  const { drawerOpen } = useContext(UIContext)

  const styles = {
    first : {
      pb : 3,
    },
    divide : {
      background : drawerOpen ? 'rgba(0,0,0,.1)' : 'white'
    },
    second : {
      pt : 3,
    }
  }

  return (
    <>
      <List sx={styles.first}>
        {ItemsOne.map(({icon, text, path, badge, arrowdown, sublist} : SingleListProps, index) => (
          <SingleList icon={icon} text={text} path={path} badge={badge} arrowdown={arrowdown} sublist={sublist} key={index} />
        ))}
      </List>
      <Divider sx={styles.divide} />
      <List sx={styles.second}>
        {ItemsTwo.map(({icon, text, path, badge, arrowdown, sublist} : SingleListProps, index) => (
          <SingleList icon={icon} text={text} path={path} badge={badge} arrowdown={arrowdown} sublist={sublist} key={index} />
        ))}
      </List>
      {drawerOpen && <SideInput />}
    </>
  )
}