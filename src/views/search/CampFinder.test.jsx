import {render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import CampFinder from './CampFinder';
import {BrowserRouter as Router} from 'react-router-dom';

it('should render the list of search options', () => {
    render(
        <UserProvider>
            <Router>
                <CampFinder />
            </Router>
        </UserProvider>
    )
    screen.debug();
})