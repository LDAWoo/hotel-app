import { useAuth0 } from "@auth0/auth0-react";
import useRegisterToolTipUser from "../../../../../hooks/useRegisterToolTipUser";
import TitleComponent from "../../../../TitleComponent/TitleComponent";
import RegisterToolTip from "../../../../ToolTip/RegisterToolTip/RegisterToolTip";
import UserButton from "./UserButton";
import UserMenu from "./UserMenu";
function User() {
  const { isOpen, onOpen, onClose } = useRegisterToolTipUser();
  const { user } = useAuth0();

  const handleShowMenuUser = () => {
    if (isOpen) {
      onClose();
      return;
    }
    onOpen();
  };
  return (
    <div className='relative'>
      <UserButton
        title={user?.name}
        src={user?.picture}
        onClick={handleShowMenuUser}
      />
      <RegisterToolTip
        userRegisterToolTip={useRegisterToolTipUser}
        component={<TitleComponent title={user?.name} src={user?.picture} />}
        render={<UserMenu />}
        width={240}
        zIndex='z-[999]'
      />
    </div>
  );
}

export default User;
