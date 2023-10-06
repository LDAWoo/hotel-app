import { useAuth0 } from "@auth0/auth0-react";
import Language from "./Language/Language";
import Theme from "./Theme/Theme";
import HeaderLogin from "./Login/HeaderLogin";
import User from "./User/User";
import Menu from "./Menu/Menu";
import LanguageModal from "../../../Modals/LanguageModal/LanguageModal";

function HeaderRight() {
  const { user } = useAuth0();

  return (
    <div className='flex items-center justify-center'>
      <LanguageModal />
      <Language />
      <Theme />
      {user ? <User /> : <HeaderLogin />}
      <Menu />
    </div>
  );
}

export default HeaderRight;
