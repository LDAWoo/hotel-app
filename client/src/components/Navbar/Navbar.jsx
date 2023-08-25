import { useContext } from "react";
import { UserContext } from "../Contexts/AppUserProvider";
import Header from "./Header/Header";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const{handleLogout} = useContext(UserContext)
    const {user} = useAuth0();
    console.log(user);

    return ( 
        <div className="flex flex-col w-full">
            <Header/>
            <div onClick={handleLogout}>Logout</div>
        </div>
     );
}

export default Navbar;