import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UIProvider from '../context/UIProvider';
import { LatestNews } from '../page/cards/LatestNews';

const MockLatestNews = () => {
    return (
        <BrowserRouter>
            <UIProvider>
                <LatestNews />
            </UIProvider>
        </BrowserRouter>
    )
}

describe('products test', () => {
    it('render a particular product', async() => {
        render(<MockLatestNews />);
        const productElement = await screen.findByTestId("product-item-0");
        expect(productElement).toBeInTheDocument();
    });
    
    it('render all products', async() => {
        render(<MockLatestNews />);
        const productElements = await screen.findAllByTestId(/product-item/i);
        expect(productElements.length).toBe(1);
    });
})