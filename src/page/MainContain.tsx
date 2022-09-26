import {useContext} from 'react';
import Box from '@mui/material/Box';
import MainHeader from './MainHeader'
import { UIContext } from '../context/UIProvider';
import { MainWelcome } from './MainWelcome';
import MainBody from './MainBody';

function MainContain() {

  const { title } = useContext(UIContext)

  return (
    <Box>
      <MainHeader title={title} />
      <MainWelcome />
      <MainBody />
    </Box>
  )
}

export default MainContain