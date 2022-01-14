import React from 'react'
import renderer from 'react-test-renderer'
import { UserProvider } from '../../context/UserContext'
import SignUp from './SignUp'
import { BrowserRouter as Router } from 'react-router-dom'
 



describe('is it here?', () => {
    
    const wrapper = renderer.create(
    <UserProvider>
        <Router>
            <SignUp />
        </Router>
    </UserProvider>
    )

    test('did it render?', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
