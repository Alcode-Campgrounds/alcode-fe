import { useContext, useState, createContext, useEffect } from 'react';
import { getCurrentUser } from '../utils/AuthFetch';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCurrentUser()
            .then(user => setUser(user))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    )
}

const useLoadingUser = () => {
    const { loading } = useContext(UserContext)
    return loading
}

const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser hook must be called inside of a GuessContext Provider');
    }
    return context;
}

//placed here for comparison
const useAuth = () => {
    // useUser is its own custom hook and not a context. 
    // This useAuth isn't doing anything useUser isn't. It's returning the same context
    const context = useContext(useUser)

    if (context === undefined) {
        throw new Error('useAuth must be used within a provideAuth context');
    }

    return context;
}

export { UserProvider, useUser, useLoadingUser }
