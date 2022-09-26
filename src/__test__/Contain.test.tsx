import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UIProvider from '../context/UIProvider';
import { Contain } from '../components/Contain';
import { ContainProps } from '../type';

const MockContain = ({children} : ContainProps) => {
    return (
        <BrowserRouter>
            <UIProvider>
                <Contain>
                    {children}
                </Contain>
            </UIProvider>
        </BrowserRouter>
    )
}

it('show same text when one of the item are clicked on', async() => {
    render(
        <MockContain>
        </MockContain>
    );
    const dashboardElement = screen.getByTestId('Dashboard');
    const TextElement = screen.getByText('Dashboard');
    fireEvent.click(dashboardElement);
    expect(TextElement).toBeVisible();
});
