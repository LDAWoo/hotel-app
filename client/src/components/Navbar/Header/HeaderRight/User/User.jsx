import { useContext } from "react";
import { userImage } from "../../../../../assets/Icons/UserImage";
import useRegisterToolTipUser from "../../../../../hooks/useRegisterToolTipUser";
import { UserContext } from "../../../../Contexts/AppUserProvider";
import TitleComponent from "../../../../TitleComponent/TitleComponent";
import RegisterToolTip from "../../../../ToolTip/RegisterToolTip/RegisterToolTip";
import UserButton from "./UserButton";
import UserMenu from "./UserMenu";
function User() {
  const { isOpen, onOpen, onClose } = useRegisterToolTipUser();
  const { user } = useContext(UserContext);

  const handleShowMenuUser = () => {
    if (isOpen) {
      onClose();
      return;
    }
    onOpen();
  };

  const src = user?.picture ? user?.picture : userImage;

  return (
    <div className='relative'>
      <UserButton
        title={user?.firstName + " " + user?.lastName}
        src={src}
        onClick={handleShowMenuUser}
      />
      <RegisterToolTip
        userRegisterToolTip={useRegisterToolTipUser}
        component={<TitleComponent title={user?.name} src={src} />}
        render={<UserMenu />}
        width={240}
        zIndex='z-[999]'
      />
    </div>
  );
}

export default User;
