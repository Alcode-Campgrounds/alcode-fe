import React from 'react'
import renderer from 'react-test-renderer'
import Profile from './Profile'



describe('is it here?', () => {
    
    const wrapper = renderer.create(<Profile />)

    test('did it render?', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
