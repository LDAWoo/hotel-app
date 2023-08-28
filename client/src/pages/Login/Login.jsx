import { useContext } from "react";
import { use100vh } from "react-div-100vh";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import FacebookLogin from "react-facebook-login";
import { useTranslation } from "react-i18next";
import Button from "../../components/Buttons/Button";
import { ThemeContext } from "../../components/Contexts/AppThemeProvider";
import { UserContext } from "../../components/Contexts/AppUserProvider";
import Image from "../../components/Image/Image";
import TextInput from "../../components/TextInput/TextInput";

import "./facebookSDK";
const appID = import.meta.env.VITE_APP_FACEBOOK_APP_ID;

function Login() {
  const { darkMode } = useContext(ThemeContext);
  const { handleLoginWithGoogle } = useContext(UserContext);

  const { loginWithRedirect } = useAuth0();

  const heightWindow = use100vh();
  const { t } = useTranslation();

  const responseFacebook = (response) => {
    console.log(response);

    if (response.accessToken) {
      loginWithRedirect({ connection: "facebook", accessToken: response.accessToken });
    }
  };
  return (
    <div className={`${darkMode}`}>
      <div
        className={`flex justify-center p-[48px] bg-gray-50 dark:bg-primary-700`}
        style={{ minHeight: heightWindow }}
      >
        <div className='min-w[296px] w-full sm:w-[446px] md:w-[310px]'>
          <Link to='/'>
            <Image
              src='/images/logo-dark.png'
              srcDark='/images/logo-light.png'
              alt='Staying.com'
            />
          </Link>
          <div className='text-[32px] sm:text-[48px] md:text-[56px] font-bold dark:text-white mb-5'>
            {t("Login.title")}
          </div>
          <div className='pb-8'>
            <div className='text-[16px] sm:text-[18px] md:text-[22px] font-medium dark:text-white mb-4'>
              {t("Login.loginWithOpenAccount")}
            </div>
            <div className='flex gap-2'>
              <Button
                className='w-full pt-2 pb-2 pr-5 pl-5 border-[2px] rounded-md hover:border-gray-700 dark:border-gray-700 cursor-pointer hover:dark:border-gray-400 dark:text-white duration-200'
                classIcon='text-blue-800'
                size={30}
                icon={FcGoogle}
                title='Google'
                classTitle='text-[18px] font-medium'
                onClick={handleLoginWithGoogle}
              />

              <FacebookLogin
                appId={appID}
                autoLoad={true}
                fields='name,email,picture'
                textButton='Facebook'
                callback={responseFacebook}
                cssClass='flex items-center text-center justify-center font-medium w-full pt-2 pb-4 pr-5 pl-5 border-[2px] rounded-md hover:border-gray-700 dark:border-gray-700 cursor-pointer hover:dark:border-gray-400 dark:text-white duration-200'
              />
            </div>
          </div>
          <div className='w-full border-t-[2px] dark:border-gray-700' />
          <div className='flex flex-col w-full space-y-4 pt-8'>
            <div className='font-medium dark:text-white text-[16px]'>
              {t("Login.orContinueWithEmail")}
            </div>
            <TextInput
              className=''
              placeholder={t("Login.email")}
              required
              name='email'
              icon={AiOutlineMail}
              sizeIcon={28}
            />
            <TextInput
              placeholder={t("Login.password")}
              className=''
              name='password'
              type='password'
              required
              icon={AiFillLock}
              sizeIcon={28}
            />
            <Button
              className='p-2 bg-blue-500 rounded-lg flex items-center justify-center w-full font-medium text-white text-[18px] hover:bg-blue-600 cursor-pointer duration-200'
              title={t("Login.title")}
            />
          </div>
          <div className='flex items-center justify-center mt-8 font-medium text-[15px] text-gray-400'>
            {t("Login.description")}
          </div>
          <div className='flex items-center mt-8'>
            <div className='text-gray-500 font-medium'>
              {t("Login.doNotHaveAnAccount")}
            </div>
            <Link
              className='ml-2 font-bold dark:text-white hover:text-blue-600 dark:hover:text-blue-600 duration-200'
              to='/register'
            >
              {t("Login.register")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;