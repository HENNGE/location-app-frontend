import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
    test('renders correctly', () => {
        render(
            <MemoryRouter>
                <NotFoundPage />
            </MemoryRouter>
        );

        expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    });
});
