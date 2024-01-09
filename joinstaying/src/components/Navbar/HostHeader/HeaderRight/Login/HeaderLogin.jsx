import { useTranslation } from "react-i18next";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "../../../../Buttons/Button";
import UserButton from "../User/UserButton";
function HeaderLogin() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="hidden lg:flex translate-y-1">
        <div>
          <Button border className="text-white rounded-sm border-white hover:bg-hotel-75 h-full text-[14px] pt-2 pb-2 pl-2 pr-2 font-medium " title={t("Login.title")} onClick={handleLogin} />
        </div>
      </div>

      <div className="flex lg:hidden">
        <UserButton onClick={handleLogin} icon={AiOutlineUser} />
      </div>
    </>
  );
}

export default HeaderLogin;
