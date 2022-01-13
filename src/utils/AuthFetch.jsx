
export const newUserSignUp = async ( name, email, password ) => {
    const authURL = `${process.env.REACT_APP_BACKEND_URL}`;
    const response = await fetch(authURL, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password}),
    });
    const data = await response.json();
    return data;
}

export const existingUserSignIn = async (email, password) => {
    const loginUrl = `${process.env.REACT_APP_LOGIN}`;
    const data = await fetch(loginUrl, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
    const response = await data.json();
    return response;
}
