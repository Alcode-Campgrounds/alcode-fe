
export const newUserSignUp = async ({ email, password, name }) => {

    const authURL = `${process.env.BACKEND_URL}/auth/signup`;

    const response = await fetch(authURL, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(email, password, name),
        // body: { email, password, name },
    });

    const data = await response.json();
    
    return data;

}