import { useState, createContext } from 'react';
import { ContainProps } from '../type';

export const UIContext = createContext<any>(null);

function UIProvider({children} : ContainProps) {

    const [drawerOpen, setDrawerOpen] = useState(true);
    const [subListOpen, setSubListOpen] = useState(false);
    const [title, setTitle] = useState('Dashboard');

    const handleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const values = {
        drawerOpen,
        handleDrawer,
        subListOpen, 
        setSubListOpen,
        title,
        setTitle,
    }
    
    return (
        <UIContext.Provider value={values}>
            {children}
        </UIContext.Provider>
    )
}

export default UIProvider;