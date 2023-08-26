import { useAuth0 } from "@auth0/auth0-react";
import Language from "./Language/Language";
import Theme from "./Theme/Theme";
import HeaderLogin from "./Login/HeaderLogin";
import User from "./User/User";

function HeaderRight() {
  const { user } = useAuth0();

  return (
    <div className='flex items-center justify-center'>
      <Language />
      <Theme />
      {user ? <User /> : <HeaderLogin />}
    </div>
  );
}

export default HeaderRight;
