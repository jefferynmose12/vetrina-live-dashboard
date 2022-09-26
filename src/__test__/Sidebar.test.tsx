import { render, screen, fireEvent } from '@testing-library/react';
import SideBar from '../components/sidebar/SideBar';
import { BrowserRouter } from 'react-router-dom';
import UIProvider from '../context/UIProvider';

const MockSideBar = () => {
    return (
        <BrowserRouter>
            <UIProvider>
                <SideBar />
            </UIProvider>
        </BrowserRouter>
    )
}

it('hide list text when button is clicked', async() => {
  render(<MockSideBar />);
  const buttonElement = screen.getByTestId('btn-header');
  const TextElement = screen.getByText('Dashboard');
  fireEvent.click(buttonElement)
  expect(TextElement).not.toBeVisible();
});
