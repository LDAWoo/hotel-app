import { useContext } from "react";
import { UserContext } from "../../../Contexts/AppUserProvider";
import Language from "./Language/Language";
import ListYourProperty from "./ListYourProperty/ListYourProperty";
import HeaderLogin from "./Login/HeaderLogin";
import Menu from "./Menu/Menu";
import Theme from "./Theme/Theme";
import User from "./User/User";

function HeaderRight() {
  const { user } = useContext(UserContext);

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
