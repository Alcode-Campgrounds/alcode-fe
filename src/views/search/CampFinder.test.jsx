import {render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import CampFinder from './CampFinder';
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

jest.mock('../../context/UserContext');

it('should render the list of search options', async () => {
    render(
        <UserProvider>
            <Router>
                <CampFinder />
            </Router>
        </UserProvider>
    )
    userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', {name: 'Washington'})
        )
    const search = await screen.findByText('Search');
    expect(screen.getByRole('option', {name: 'Washington'}).selected).toBe(true);
    expect(search).toBeInTheDocument();
});