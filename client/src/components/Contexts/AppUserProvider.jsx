import { createContext } from "react";
import PropTypes from 'prop-types'
import { useAuth0 } from "@auth0/auth0-react";


export const UserContext = createContext()
const AppUserProvider = ({children}) =>{
    const {loginWithRedirect,logout } = useAuth0();

    const handleLoginWithGoogle = () =>{
        loginWithRedirect({connection: 'google-oauth2'});
    }

    const handleLoginWithFacebook = () =>{
        console.log("Facebook");
    }

    const handleLogout = () =>{
        logout();
    }

    return (
        <UserContext.Provider 
        value={{handleLoginWithGoogle,handleLoginWithFacebook,handleLogout}}
        >
            {children}
        </UserContext.Provider>
    );
}

AppUserProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppUserProvider;