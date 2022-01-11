import React from 'react'
import { useState } from 'react'
import { newUserSignUp } from '../../utils/AuthFetch';
import { useHistory } from 'react-router-dom';

export default function SignUp({ hasUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const handleSubmitSignUp = async (e) => {
        e.preventDefault()

        if(hasUser) {
            return 
        } 
          
        
        try {
         await newUserSignUp(name, email, password)
            history.replace()
        } catch (error) {
            setError(error.message)
        }
        
                
        
    }

    return (
            <fieldset>
            <legend>{ hasUser ? 'SignIn' : 'SignUp'}</legend>
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

                { !hasUser && 
                <label htmlFor="name-input">
                <input id="name-input" required value={name} type="text" placeholder='name' className='input' onChange={({target}) => {
                    setName(target.value);
                }}/>
                </label>}
                <br />
                <button type='submit' className='btn-main'>{ hasUser ? 'SignIn' : 'SignUp'}</button>
                <br />
                <p>{error}</p>
            </form>
            </fieldset>
        
    )
}
