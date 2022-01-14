import React from 'react'
import { create }from 'react-test-renderer'
import { UserProvider } from '../../context/UserContext'
import SignUp from './SignUp'
import { BrowserRouter as Router } from 'react-router-dom'
 



describe('is it here?', () => {
    it('did it render?', () => {
    
    const wrapper = create(
    <UserProvider>
        <Router>
            <SignUp />
        </Router>
    </UserProvider>
    )

        expect(wrapper).toMatchSnapshot()
    })
})
