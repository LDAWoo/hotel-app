import { MdOutlineAddHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../../../configs/routesConfig";
import MenuButton from "./MenuButton";
import useRegisterToolTipMenuMore from "../../../../../hooks/useRegisterToolTipMenuMore";

function ListYourProperty() {
  const navigate = useNavigate();
  const { onClose } = useRegisterToolTipMenuMore();
  const handleClickJoinStaying = () => {
    navigate(routesConfig.join);
    onClose();
  };
  return (
    <MenuButton
      title='ListYourProperty'
      className='dark:text-white'
      icon={MdOutlineAddHome}
      size={18}
      onClick={handleClickJoinStaying}
    />
  );
}

export default ListYourProperty;
