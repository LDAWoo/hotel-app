import { AiOutlineMenu } from "react-icons/ai";
import useRegisterToolTipMenuMore from "../../../../../hooks/useRegisterToolTipMenuMore";
import Button from "../../../../Buttons/Button";
import TitleComponent from "../../../../TitleComponent/TitleComponent";
import RegisterToolTip from "../../../../ToolTip/RegisterToolTip/RegisterToolTip";
import MenuMore from "./MenuMore";
import { useTranslation } from "react-i18next";

function Menu() {
  const {t} = useTranslation()
  const { onOpen } = useRegisterToolTipMenuMore();
  const handleShowMenuMore = () => {
    onOpen();
  };
  return (
    <div>
      <div className='flex lg:hidden relative items-center justify-center w-14 h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-200 '>
        <Button
          className='w-full h-full translate-x-1'
          icon={AiOutlineMenu}
          classIcon='text-gray-300'
          size={24}
          onClick={handleShowMenuMore}
        />
        <RegisterToolTip
          component={<TitleComponent title={t("Menu.more")} />}
          userRegisterToolTip={useRegisterToolTipMenuMore}
          render={<MenuMore />}
          zIndex='z-[999]'
        />
      </div>
    </div>
  );
}

export default Menu;
