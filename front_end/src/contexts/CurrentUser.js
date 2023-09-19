import { createContext, useState, useEffect } from "react";


export const CurrentUser = createContext()
//allows the logged in user's information to be used on all the components
function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)
    //goes to the back end where the user is authorized during login and set's the token to local storage to use on all pages required
    useEffect(() => {
        const getLoggedUser = async () => {
            let response = await fetch(`${process.env.REACT_APP_SERVER_URL}auth/profile`,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedUser()
    }, [])

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider