import { Route, Routes } from 'react-router-dom';
import { Contain } from './components/Contain';
import UIProvider from './context/UIProvider';
import MainContain from './page/MainContain';
import './index.css';

function App() {

  return (
    <UIProvider>
      <Contain>
        <Routes>
          <Route path='/' element={<MainContain />} />
          <Route path='Dashboard' element={<MainContain />} />
          <Route path='Catalogue' element={<MainContain />} />
          <Route path='Order' element={<MainContain />} />
          <Route path='Customers' element={<MainContain />} />
          <Route path='Marketing' element={<MainContain />} />
          <Route path='DeliveryOptions' element={<MainContain />} />
          <Route path='PaymentOptions' element={<MainContain />} />
          <Route path='StoreDesign' element={<MainContain />} />
          <Route path='Subscription' element={<MainContain />} />
          <Route path='Integrations' element={<MainContain />} />
          <Route path='Extensions' element={<MainContain />} />
          <Route path='Settings' element={<MainContain />} />
          <Route path='Logout' element={<MainContain />} />
          <Route path='CustomerSupport' element={<MainContain />} />
          <Route path='Shareyourshop' element={<MainContain />} />
          <Route path='Viewyourshop' element={<MainContain />} />
        </Routes>
      </Contain>
    </UIProvider>
  );
}

export default App;
