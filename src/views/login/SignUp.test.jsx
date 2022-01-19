import {render, screen} from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import SignUp from './SignUp';
import {BrowserRouter as Router} from 'react-router-dom';

it('should render a new user signing up', async () => {
    render(
        <UserProvider>
            <Router>
                <SignUp />
            </Router>
        </UserProvider>
    )
    const email = await screen.findByPlaceholderText('email');
    const password = await screen.findByPlaceholderText('password');
    const name = await screen.findByPlaceholderText('name');
    const signupButton = await screen.findByText('SignUp');

    // userEvent.type(email, 'fake@email.com');
    // userEvent.type(password, 'fakepassword');
    // userEvent.type(name, 'fake-user');
    // userEvent.click(signupButton)
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
});
it('should render a new user signing in', async () => {
    render(
        <UserProvider>
            <Router>
                <SignUp hasUser/>
            </Router>
        </UserProvider>
    )
    const email = await screen.findByPlaceholderText('email');
    const password = await screen.findByPlaceholderText('password');
    const signupButton = await screen.findByText('SignIn');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
});