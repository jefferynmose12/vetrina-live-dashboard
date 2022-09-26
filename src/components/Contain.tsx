import { Box } from '@mui/material';
import { ContainProps } from '../type';
import SideBar from './sidebar/SideBar';

export const Contain = ({children} : ContainProps) => {

  const styles = {
    contain : {
      display: 'flex'
    },
    main : {
      flexGrow: 1,
      maxWidth : '100%'
    }
  }
  
  return (
    <Box sx={styles.contain}>
      <SideBar />
      <Box component="main" sx={styles.main}>
        {children}
      </Box>
    </Box>
  );
}
