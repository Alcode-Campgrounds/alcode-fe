import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { existingUserSignIn, newUserSignUp } from '../../utils/AuthFetch';

export default function SignUp({ hasUser = false }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useUser();
  let navigate = useNavigate();

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    if (hasUser) {
      const userData = await existingUserSignIn(email, password);
      if (userData.email) {
        setUser({ name: userData.name, email: userData.email });
        navigate('/search');
      } else {
        setError('Wrong email/password');
      }
    } else {
      try {
        const userSignUp = await newUserSignUp(name, email, password);
        if (userSignUp.status !== 400) {
          setUser({ name, email });
          navigate('/search');
        } else {
          setError('User already exists');
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className='form-container' >
    <form className='form-main' onSubmit={handleSubmitSignUp}>
      <fieldset>
        <legend className='legend'>{hasUser ? 'Welcome back!' : 'New here? Please sign up'}</legend>
      
        <label htmlFor='email-input'>
          <input
            id='email-input'
            required
            value={email}
            type='text'
            placeholder='email'
            className='input-A'
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
        </label>
        <label htmlFor='password-input'>
          <input
            id='password-input'
            required
            value={password}
            type='text'
            placeholder='password'
            className='input-B'
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </label>

        {!hasUser && (
          <label htmlFor='name-input'>
            <input
              id='name-input'
              required
              value={name}
              type='text'
              placeholder='name'
              className='input-C'
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
          </label>
        )}
        
        <button type='submit' className='primary-btn'>
          {hasUser ? 'SignIn' : 'SignUp'}
        </button>
          {!hasUser && <div className='google-btn-container'><p>Already have an account?</p><Link to='/signin' className='signin-txt'>Sign in</Link></div>}
          {hasUser && <div><a className='google-btn' href={process.env.REACT_APP_OAUTH}>
          ...google.....
          </a><br /><span>Here by mistake?  </span><Link to='/signup' className='signup-txt'>Sign up</Link></div>}    
        <p>{error}</p>
          
        
      </fieldset>
    </form>
    </div>
  );
}
