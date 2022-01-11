import React from 'react'
import { useState } from 'react'
import { newUserSignUp } from '../../utils/AuthFetch';

export default function SignUp({ user = false }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmitSignUp = async (e) => {
        e.preventDefault()
           if(!user) {
                   const newUser = await newUserSignUp({ email, password, name })
                   console.log(newUser);
                
        }
    }

    return (
            <fieldset>
            <legend>{ user ? 'SignIn' : 'SignUp'}</legend>
                <br />
            <form className='form-main' onSubmit={handleSubmitSignUp}>
                <label htmlFor="email-input">
                <input id="email-input"  required  value={email} type="text" placeholder='email' className='input' onChange={({target}) => {
                    setEmail(target.value);
                }}/>
                </label>
                <label htmlFor="password-input">
                <input id="password-input" required  value={password} type="text" placeholder='password' className='input' onChange={({target}) => {
                    setPassword(target.value);
                }}/>
                </label>

                { !user && 
                <label htmlFor="name-input">
                <input id="name-input" required value={name} type="text" placeholder='name' className='input' onChange={({target}) => {
                    setName(target.value);
                }}/>
                </label>}
                <br />
                <button type='submit' className='btn-main'>{ user ? 'SignIn' : 'SignUp'}</button>
                <br />
            </form>
            </fieldset>
        
    )
}
