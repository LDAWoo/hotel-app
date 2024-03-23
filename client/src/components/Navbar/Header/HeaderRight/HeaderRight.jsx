import { useContext } from "react";
import { UserContext } from "../../../Contexts/AppUserProvider";
import Language from "./Language/Language";
import ListYourProperty from "./ListYourProperty/ListYourProperty";
import HeaderLogin from "./Login/HeaderLogin";
import Menu from "./Menu/Menu";
import User from "./User/User";

function HeaderRight() {
  const { user } = useContext(UserContext);
  return (
    <div className='flex items-center justify-center w-full'>
      <Language />
      <ListYourProperty />
      {Object.keys(user).length > 0 ? <User /> : <HeaderLogin />}
      <Menu />
    </div>
  );
}

export default HeaderRight;
