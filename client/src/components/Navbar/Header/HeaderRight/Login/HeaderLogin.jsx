import Button from "../../../../Buttons/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import UserButton from "../User/UserButton";
import { AiOutlineUser } from "react-icons/ai";
function HeaderLogin() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <div className='hidden lg:flex'>
        <div className='flex items-center justify-center h-9 mt-2 mr-2 rounded-[3px] bg-white hover:bg-gray-200 '>
          <Button
            className='h-full text-[14px] pl-3 pr-3 font-medium text-hotel-50'
            title={t("Login.title")}
            onClick={handleLogin}
          />
        </div>

        <div className='flex items-center justify-center h-9 mt-2 mr-2 rounded-[3px] bg-white hover:bg-gray-200 '>
          <Button
            className='h-full text-[14px] pl-3 pr-3 font-medium text-hotel-50'
            title={t("Register.title")}
            onClick={handleRegister}
          />
        </div>
      </div>

      <div className='lg:hidden'>
        <UserButton onClick={handleLogin} icon={AiOutlineUser} />
      </div>
    </>
  );
}

export default HeaderLogin;
