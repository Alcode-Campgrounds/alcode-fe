import { useContext, useState, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({})

    return (
        <UserContext.Provider value={{user, setUser}}>
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
