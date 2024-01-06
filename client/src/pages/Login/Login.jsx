import { useContext, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import Button from "../../components/Buttons/Button";
import { UserContext } from "../../components/Contexts/AppUserProvider";
import TextInput from "../../components/TextInput/TextInput";

import Border from "../../components/Border/Border";
import TextError from "../../components/TextError/TextError";
import Title from "../../components/Title/Title";
import { validateEmail } from "../Validate/Email";
import { validatePassword } from "../Validate/Password";

import "./facebookSDK";
// const appID = import.meta.env.VITE_APP_FACEBOOK_APP_ID;

function Login() {
  const { handleLoginWithGoogle, handleLoginWithFacebook, handleLogin } =
    useContext(UserContext);

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const { email, password } = formData;

  const [state, setState] = useState({
    errorEmail: "",
    errorPassword: "",
  });

  const { errorEmail, errorPassword } = state;
  const { t } = useTranslation();

  const login = () => {
    if (!validate()) return;
    handleLogin(formData);
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

      <div className='flex flex-col w-full space-y-2 pt-8'>
        <div className='font-medium dark:text-white text-[16px]'>
          {t("Login.orContinueWithEmail")}
        </div>
        <TextInput
          placeholder={t("Login.email")}
          id='email'
          error={errorEmail.length > 0}
          required
          name='email'
          sizeIcon={24}
          onChange={handleChange}
        />
        <TextError error={errorEmail} />
        <TextInput
          placeholder={t("Login.password")}
          id='password'
          name='password'
          error={errorPassword.length > 0}
          type='password'
          required
          sizeIcon={24}
          onChange={handleChange}
        />
        <TextError error={errorPassword} />

        <Button
          className='p-2 bg-hotel-100 rounded-[4px] flex items-center justify-center w-full font-medium text-white text-[18px] hover:bg-hotel-600 cursor-pointer duration-200'
          title={t("Login.title")}
          onClick={login}
        />
      </div>
      <div className='flex flex-row items-center mt-4'>
        <Border className='-translate-y-[3px] h-[1px] w-full ' />
        <span className='whitespace-nowrap ml-2 mr-2 text-[12px] -translate-y-1'>
          {t("Login.loginWithOpenAccount")}
        </span>
        <Border className='-translate-y-[3px] h-[1px] w-full ' />
      </div>
      <div className='flex flex-row gap-4 items-center justify-center mt-4'>
        <Button
          icon={FcGoogle}
          className='pt-5 pb-5 pr-[8px] pl-[9px] border justify-center items-center duration-200 hover:border-hotel-100 rounded-sm'
          size={30}
          classIcon='translate-x-1'
          onClick={handleLoginWithGoogle}
        />
        <Button
          icon={AiFillFacebook}
          className='pt-5 pb-5 pr-[8px] pl-[9px] border justify-center items-center text-hotel-75 duration-200 hover:border-hotel-100 rounded-sm'
          size={30}
          classIcon='translate-x-1'
          onClick={handleLoginWithFacebook}
        />
      </div>
      <div className='flex items-center justify-center mt-8 font-normal text-[12px] sm:text-[14px] text-gray-400'>
        {t("Login.description")}
      </div>
      <div className='flex items-center mt-8'>
        <div className='text-gray-500 text-[14px]'>
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
