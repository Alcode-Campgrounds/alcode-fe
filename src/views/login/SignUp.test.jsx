import React from 'react'
import { create }from 'react-test-renderer'
import { UserProvider } from '../../context/UserContext'
import SignUp from './SignUp'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

 



describe('is it here?', () => {
    it('did it render?', () => {
    
    const wrapper = create(
    <UserProvider>
        <MemoryRouter initialEntries={["/signup"]}>
        <Routes>
           <Route path="signup" element={<SignUp />} />
        </Routes>
        </MemoryRouter>
    </UserProvider>
    )

        expect(wrapper).toMatchSnapshot()
    })
})
