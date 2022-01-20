import {render, screen} from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import SignUp from './SignUp';
import {MemoryRouter, Route, Router, Routes} from 'react-router-dom';
import CampFinder from '../search/CampFinder';
import userEvent from '@testing-library/user-event';
import ProtectedRoutes from '../../components/PrivateRoute/ProtectedRoutes';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const fakeUser = {
    name: 'fake-user',
    email: 'fakeUser@email.com',
    password: 'fakepassword'
}
const fakeUserSignIn = {
    email: 'fakeUser@email.com',
    password: 'fakepassword'
}
const worker = setupServer(
    rest.post(process.env.REACT_APP_BACKEND_URL, (req, res, ctx) => {
        return res(
            ctx.json(fakeUser)
        )
    }),
    rest.post(process.env.REACT_APP_LOGIN, (req, res, ctx) => {
        return res(
            ctx.json(fakeUserSignIn)
        )
    }),
)
beforeAll(() => {
    worker.listen()
});
afterAll(() => {
    worker.close()
});
it('should render a new user signing in', async () => {
    render(
        <UserProvider>
            <MemoryRouter initialEntries={['/signin']}>
                <Routes>
                    <Route path="/signin" element={<SignUp hasUser/>} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/search" element={<CampFinder />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        </UserProvider>
    )
    const email = await screen.findByPlaceholderText('email');
    const password = await screen.findByPlaceholderText('password');
    const signupButton = await screen.findByText('SignIn');
    userEvent.type(email, 'fakeUser@email.com');
    userEvent.type(password, 'fakepassword');
    userEvent.click(signupButton);

    const search = await screen.findByText(/Search for all campgrounds by State/i);
    expect(search).toBeInTheDocument();
});