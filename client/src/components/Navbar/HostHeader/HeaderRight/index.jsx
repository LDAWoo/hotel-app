import LanguageModal from "../../../Modals/LanguageModal/LanguageModal";
import Language from "../../Header/HeaderRight/Language/Language";
import User from "../../Header/HeaderRight/User/User";

function HeaderRight() {
  return (
    <div className='flex items-center justify-center'>
      <LanguageModal />
      <Language />
      <User />
    </div>
  );
}

export default HeaderRight;
