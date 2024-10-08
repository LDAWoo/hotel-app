import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../../../configs/routesConfig";
import useRegisterToolTipUser from "../../../../../hooks/useRegisterToolTipUser";
import Button from "../../../../Buttons/Button";
import { UserContext } from "../../../../Contexts/AppUserProvider";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";

function UserMenu() {
  const Users = [
    {
      id: 1,
      icon: AiOutlineUser,
      type: "profile",
      translationKey: "User.managerProfile",
    },
    {
      id: 2,
      icon: IoBagHandleOutline,
      type: "booking",
      translationKey: "User.bookingAndTrip",
    },
    {
      id: 3,
      icon: LuHeart,
      type: "wishlist",
      translationKey: "User.myWishlist",
    },
    {
      id: 4,
      icon: BiLogOutCircle,
      type: "logout",
      translationKey: "User.logout",
    },
  ];

  const { t } = useTranslation();
  const {onClose} = useRegisterToolTipUser()
  const { handleLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSelectOption = (opt) => {
    switch (opt) {
      case "profile":
        onClose()
        navigate(routesConfig.profile)
        break;
        
      case "booking":
        onClose()
        navigate(routesConfig.mytrip)
        break;
        
      case "wishlist":
        onClose()
        navigate(routesConfig.mywishlist)
        break;
        
      case "logout":
        onClose()
        handleLogout();
        break;
    }
  };

  return (
    <>
      {Users.map((u) => (
        <div key={u.id} className='w-full'>
          <Button
            className='w-full h-full hover:bg-gray-200/50 dark:hover:bg-primary-500 p-[7px] translate duration-300'
            icon={u.icon}
            classTitle='dark:text-primary-50'
            title={t(u?.translationKey)}
            xxl
            classIcon='dark:text-primary-50'
            size={20}
            onClick={() => handleSelectOption(u.type)}
            iconPosition='before'
          />
        </div>
      ))}
    </>
  );
}

export default UserMenu;
