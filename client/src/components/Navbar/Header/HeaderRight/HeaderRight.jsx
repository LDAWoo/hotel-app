import { useAuth0 } from "@auth0/auth0-react";
import Language from "./Language/Language";
import ListYourProperty from "./ListYourProperty/ListYourProperty";
import HeaderLogin from "./Login/HeaderLogin";
import Menu from "./Menu/Menu";
import Theme from "./Theme/Theme";
import User from "./User/User";

function HeaderRight() {
  const { user } = useAuth0();

  return (
    <div className='flex items-center justify-center'>
      <Language />
      <Theme />
      <ListYourProperty />
      {user ? <User /> : <HeaderLogin />}
      <Menu />
    </div>
  );
}

export default HeaderRight;
