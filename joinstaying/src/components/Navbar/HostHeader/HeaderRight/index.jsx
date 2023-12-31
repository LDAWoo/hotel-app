import { useContext } from "react";
import Language from "./Language/Language";
import User from "./User/User";
import { UserContext } from "../../../Contexts/AppUserProvider";
import HeaderLogin from "./Login/HeaderLogin";

function HeaderRight() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex items-center justify-center">
      <Language />
      {Object.keys(user).length > 0 ? <User /> : <HeaderLogin />}
    </div>
  );
}

export default HeaderRight;
