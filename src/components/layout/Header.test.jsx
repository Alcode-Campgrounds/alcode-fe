import {render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import Header from './Header';
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

jest.mock('../../context/UserContext');

it('should render a header for a user not logged in', async () => {
    render(
        <UserProvider>
            <Router>
                <Header />
            </Router>
        </UserProvider>
    )
    const heading = await screen.findByText('Alcode');
    const signedIn = await screen.findByText('Signed in as fake-user');
    const logout = await screen.findByText('Logout');

    expect(heading).toBeInTheDocument();
    expect(signedIn).toBeInTheDocument();
    expect(logout).toBeInTheDocument();

    userEvent.click(logout);
    
    expect(logout).not.toBeInTheDocument();
})