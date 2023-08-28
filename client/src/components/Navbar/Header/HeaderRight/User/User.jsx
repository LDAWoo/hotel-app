import { useAuth0 } from "@auth0/auth0-react";
import useRegisterToolTipUser from "../../../../../hooks/useRegisterToolTipUser";
import TitleComponent from "../../../../TitleComponent/TitleComponent";
import RegisterToolTip from "../../../../ToolTip/RegisterToolTip/RegisterToolTip";
import UserButton from "./UserButton";
import UserMenu from "./UserMenu";
function User() {
  const { user } = useAuth0();

  return (
    <div className='relative'>
      <UserButton user={user} />
      <RegisterToolTip
        userRegisterToolTip={useRegisterToolTipUser}
        component={<TitleComponent title={user?.name} src={user?.picture} />}
        render={<UserMenu />}
        width={240}
      />
    </div>
  );
}

export default User;
