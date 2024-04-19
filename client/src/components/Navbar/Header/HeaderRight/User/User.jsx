import { useContext, useEffect, useState } from "react";
import { validUrl } from "../../../../../Regexs/Validate";
import { getHotelFavorite } from "../../../../../api/User/Wishlist";
import { userImage } from "../../../../../assets/Icons/UserImage";
import useRegisterWishlist from "../../../../../hooks/Wishlist/useRegisterWishlist";
import useRegisterToolTipUser from "../../../../../hooks/useRegisterToolTipUser";
import { UserContext } from "../../../../Contexts/AppUserProvider";
import TitleComponent from "../../../../TitleComponent/TitleComponent";
import RegisterToolTip from "../../../../ToolTip/RegisterToolTip/RegisterToolTip";
import UserButton from "./UserButton";
import UserMenu from "./UserMenu";
function User() {
  const { isOpen, onOpen, onClose } = useRegisterToolTipUser();
  const { user,token } = useContext(UserContext);
  const [avatar, setAvatar] = useState("")
  const {wishlist,setWishlist,setLoadingWishlist} = useRegisterWishlist()

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

  useEffect(() => {
        if(wishlist.length > 0) {
            return;
        }
        if (Object.keys(user).length > 0 && token) {
            const fetchData = async () => {
              try {
                setLoadingWishlist(true);
                const results = await getHotelFavorite(token);
                setWishlist(results.data)
                setLoadingWishlist(false);
              } catch (error) {
                setWishlist([])
                setLoadingWishlist(false);
              }
            };
            fetchData();
        }

    },[user, token, wishlist])

  return (
    <div className='relative w-full'>
      <UserButton
        title={user?.firstName + " " + user?.lastName}
        src={validUrl(avatar) ? avatar : null}
        onClick={handleShowMenuUser}
      />
      <RegisterToolTip
        userRegisterToolTip={useRegisterToolTipUser}
        component={<TitleComponent type="image" title={user?.firstName + " " + user?.lastName} src={validUrl(avatar) ? avatar : null} />}
        render={<UserMenu />}
        width={240}
        zIndex='z-[999]'
        left
      />
    </div>
  );
}

export default User;
