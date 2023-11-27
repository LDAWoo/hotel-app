import { useContext, useState } from "react";
import { AiFillFacebook, AiFillLock, AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import Button from "../../components/Buttons/Button";
import { UserContext } from "../../components/Contexts/AppUserProvider";
import TextInput from "../../components/TextInput/TextInput";
import routesConfig from "../../configs/routesConfig";

import "./facebookSDK";
import { postUserLogin } from "../../api/User/Login";
import Title from "../../components/Title/Title";
import TextError from "../../components/TextError/TextError";
import { validateEmail } from "../Validate/Email";
import { validatePassword } from "../Validate/Password";
// const appID = import.meta.env.VITE_APP_FACEBOOK_APP_ID;

function Login() {
  const { handleLoginWithGoogle, handleLoginWithFacebook } =
    useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState({
    errorEmail: "",
    errorPassword: "",
  });

  const { errorEmail, errorPassword } = state;
  const { t } = useTranslation();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (!validate()) return;
    const data = { email: email, password: password };
    try {
      const response = await postUserLogin(data);
      console.log(response);
      if (response && response.token) {
        const expirationTime = 14 * 24 * 60 * 60 * 1000;
        const expirationDate = new Date(Date.now() + expirationTime);
        document.cookie = `token=${
          response.token
        }; Expires=${expirationDate.toUTCString()}; Secure; HttpOnly; SameSite=Strict`;

        navigate(routesConfig.home);
      } else {
        navigate(routesConfig.login);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const validate = () => {
    let isValid = true;
    // if (!validateEmail(email)) {
    //   setState((prevState) => ({ ...prevState, errorEmail: "Email invalid" }));
    //   isValid = false;
    // } else {
    //   setState((prevState) => ({ ...prevState, errorEmail: "" }));
    // }

    if (!validatePassword(password)) {
      setState((prevState) => ({
        ...prevState,
        errorPassword: "Password invalid",
      }));
      isValid = false;
    } else {
      setState((prevState) => ({
        ...prevState,
        errorPassword: "",
      }));
    }
    return isValid;
  };

  return (
    <div className='w-full h-full'>
      <Title
        title={t("Login.title")}
        className='text-[28px] sm:text-[32px] md:text-[36px] font-bold dark:text-white mb-5'
      />
      <div className='pb-5'>
        <div className='text-[16px] sm:text-[18px] md:text-[20px] font-medium dark:text-white mb-4'>
          {t("Login.loginWithOpenAccount")}
        </div>
        <div className='flex items-center justify-center gap-2 flex-col sm:flex-row'>
          <Button
            className='w-full items-center justify-center pt-2 pb-2 pr-5 pl-5 border-[2px] rounded-md hover:border-gray-700 dark:border-gray-700 cursor-pointer hover:dark:border-gray-400 dark:text-white duration-200'
            classIcon='text-blue-800'
            size={30}
            icon={FcGoogle}
            title='Google'
            classTitle='flex items-center justify-center text-[18px] font-medium'
            onClick={handleLoginWithGoogle}
            iconPosition='before'
          />

          <Button
            className='w-full pt-2 pb-2 pr-5 pl-5 border-[2px] rounded-md hover:border-gray-700 dark:border-gray-700 cursor-pointer hover:dark:border-gray-400 dark:text-white duration-200'
            classIcon='text-blue-800 dark:text-white'
            size={30}
            icon={AiFillFacebook}
            title='Facebook'
            classTitle='text-[18px] font-medium'
            onClick={handleLoginWithFacebook}
          />
        </div>
      </div>
      <div className='flex flex-col w-full space-y-4 pt-8'>
        <div className='font-medium dark:text-white text-[16px]'>
          {t("Login.orContinueWithEmail")}
        </div>
        <TextInput
          placeholder={t("Login.email")}
          required
          name='email'
          icon={AiOutlineMail}
          sizeIcon={28}
          value={email}
          onChange={handleChangeEmail}
        />
        <TextError error={errorEmail} icon />
        <TextInput
          placeholder={t("Login.password")}
          name='password'
          type='password'
          required
          icon={AiFillLock}
          sizeIcon={28}
          value={password}
          onChange={handleChangePassword}
        />
        <TextError error={errorPassword} icon />
        <TextError error='Error' icon />

        <Button
          className='p-2 bg-blue-500 rounded-lg flex items-center justify-center w-full font-medium text-white text-[18px] hover:bg-blue-600 cursor-pointer duration-200'
          title={t("Login.title")}
          onClick={handleLogin}
        />
      </div>
      <div className='flex items-center justify-center mt-8 font-medium text-[14px] sm:text-[15px] text-gray-400'>
        {t("Login.description")}
      </div>
      <div className='flex items-center mt-8'>
        <div className='text-gray-500 text-[14px] font-medium'>
          {t("Login.doNotHaveAnAccount")}
        </div>
        <Link
          className='ml-2 text-[14px] font-bold dark:text-white hover:text-blue-600 dark:hover:text-blue-600 duration-200'
          to='/register'
        >
          {t("Login.register")}
        </Link>
      </div>
    </div>
  );
}

export default Login;
