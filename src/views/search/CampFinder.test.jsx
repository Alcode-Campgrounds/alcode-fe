import {render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import CampFinder from './CampFinder';
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

it('should render the list of search options', () => {
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
        expect(screen.getByRole('option', {name: 'Washington'}).selected).toBe(true);
});