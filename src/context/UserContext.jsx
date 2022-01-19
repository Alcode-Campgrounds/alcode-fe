import { useContext, useState, createContext, useEffect } from 'react';
import { getCurrentUser } from '../utils/AuthFetch';

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => { 
        async function loadUser(){
            await getCurrentUser()
                .then(user => setUser({name: user.name, email: user.email}))
                .finally(()=>setLoading(false)) 
            }
        loadUser();    
    }, [])

    return (
        <UserContext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined){
        throw new Error('useUser hook must be called inside of a GuessContext Provider');
    }
    return context;
}

export { UserProvider, useUser}
