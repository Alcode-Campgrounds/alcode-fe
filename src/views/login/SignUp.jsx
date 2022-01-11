import React from 'react'

export default function SignUp({ user = false }) {
    return (
        
            <fieldset className='form-main'>
            <legend>{ user ? 'SignIn' : 'SignUp'}</legend>
                <br />
                <input type="text" placeholder='email' className='input'/>
                <input type="text" placeholder='password' className='input'/>
                { !user && <input type="text" placeholder='name' className='input'/>}
                <br />
                <button type='submit' className='btn-main'>{ user ? 'SignIn' : 'SignUp'}</button>
                <br />
            </fieldset>
        
    )
}
