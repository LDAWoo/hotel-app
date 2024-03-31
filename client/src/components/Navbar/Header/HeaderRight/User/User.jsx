import { useContext, useEffect, useState } from "react";
import { userImage } from "../../../../../assets/Icons/UserImage";
import useRegisterToolTipUser from "../../../../../hooks/useRegisterToolTipUser";
import { UserContext } from "../../../../Contexts/AppUserProvider";
import TitleComponent from "../../../../TitleComponent/TitleComponent";
import RegisterToolTip from "../../../../ToolTip/RegisterToolTip/RegisterToolTip";
import UserButton from "./UserButton";
import UserMenu from "./UserMenu";
import { validUrl } from "../../../../../Regexs/Validate";
function User() {
  const { isOpen, onOpen, onClose } = useRegisterToolTipUser();
  const { user } = useContext(UserContext);
  const [avatar, setAvatar] = useState("")

  const handleShowMenuUser = () => {
    if (isOpen) {
      onClose();
      return;
    }
    onOpen();
  };

  useEffect(() => {
    if(Object.keys(user).length > 0) {
      const src = user?.avatar ? user?.avatar : userImage;
      setAvatar(src)
    }
  },[user])

  return (
    <div className='relative w-full'>
      <UserButton
        title={user?.firstName + " " + user?.lastName}
        src={validUrl(avatar) ? avatar : null}
        onClick={handleShowMenuUser}
      />
      <RegisterToolTip
        userRegisterToolTip={useRegisterToolTipUser}
        component={<TitleComponent title={user?.name} src={avatar} />}
        render={<UserMenu />}
        width={240}
        zIndex='z-[999]'
        left
      />
    </div>
  );
}

export default User;
