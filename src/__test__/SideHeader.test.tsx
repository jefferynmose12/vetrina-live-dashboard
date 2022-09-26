import { render, screen, fireEvent } from '@testing-library/react';
import SideBarHeader from '../components/sidebar/SideBarHeader';
import { BrowserRouter } from 'react-router-dom';
import UIProvider from '../context/UIProvider';

const MockSideBarHeader = () => {
    return (
        <BrowserRouter>
            <UIProvider>
                <SideBarHeader />
            </UIProvider>
        </BrowserRouter>
    )
}

it('hide logo when button is clicked', async() => {
    render(<MockSideBarHeader />);
    const buttonElement = screen.getByTestId('btn-header');
    const logoElement = screen.getByTestId('header-logo');
    fireEvent.click(buttonElement)
    expect(logoElement).not.toBeVisible();
});
