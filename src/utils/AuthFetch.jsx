
export const newUserSignUp = async ( name, email, password ) => {
    console.log(name, email, password)
    const authURL = `${process.env.REACT_APP_BACKEND_URL}`;
    console.log(authURL)

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
