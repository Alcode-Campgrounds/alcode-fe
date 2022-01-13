import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { existingUserSignIn, newUserSignUp } from "../../utils/AuthFetch";

export default function SignUp({ hasUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const {setUser} = useUser()

  let navigate = useNavigate();
  // const loginUrl = `${process.env.REACT_APP_LOGIN}`;

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    if (hasUser) {
     const userData = await existingUserSignIn(email, password)
     setUser({name: userData.name, email: userData.email})
     navigate("/search");
     
    } else {
      try {
        await newUserSignUp(name, email, password);
        setUser({name,email});
        navigate("/search");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <fieldset>
      <legend>{hasUser ? "SignIn" : "SignUp"}</legend>
      <br />
      <form className="form-main" onSubmit={handleSubmitSignUp}>
      <a href={process.env.REACT_APP_OAUTH}>Sign in with your Google account</a>
        <label htmlFor="email-input">
          <input
            id="email-input"
            required
            value={email}
            type="text"
            placeholder="email"
            className="input"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
        </label>
        <label htmlFor="password-input">
          <input
            id="password-input"
            required
            value={password}
            type="text"
            placeholder="password"
            className="input"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </label>

        {!hasUser && (
          <label htmlFor="name-input">
            <input
              id="name-input"
              required
              value={name}
              type="text"
              placeholder="name"
              className="input"
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
          </label>
        )}
        <br />
        <button type="submit" className="btn-main">
          {hasUser ? "SignIn" : "SignUp"}
        </button>
        <br />
        <p>{error}</p>
      </form>
    </fieldset>
  );
}
