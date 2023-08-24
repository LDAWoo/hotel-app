import { Link } from "react-router-dom";
import { useContext } from "react";
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook, AiFillLock, AiOutlineMail} from 'react-icons/ai'
import { ThemeContext } from "../../components/Contexts/AppThemeProvider";

import Image from "../../components/Image/Image";
import Button from "../../components/Buttons/Button";
import TextInput from '../../components/TextInput/TextInput'

function SignIn() {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={`h-screen ${darkMode}`}>
      <div className="flex justify-center h-full p-[48px] bg-gray-50 dark:bg-primary-700">
        <div className="min-w[296px] w-full sm:w-[446px] md:w-[310px]">
            <Link to="/">
              <Image 
              src="/images/logo-dark.png"
              srcDark="/images/logo-light.png"
              alt="Staying.com" />
            </Link>
            <div className="text-[32px] sm:text-[48px] md:text-[56px] font-bold dark:text-white mb-5">Sign in</div>
            <div className="pb-8">
                <div className="text-[16px] sm:text-[18px] md:text-[22px] font-medium dark:text-white mb-4">Sign up with Open Account</div>
                <div className="flex gap-2">
                    <Button
                    className="w-full pt-2 pb-2 pr-5 pl-5 border-[2px] rounded-md hover:border-gray-700 dark:border-gray-700 cursor-pointer hover:dark:border-gray-400 dark:text-white duration-200"
                    classIcon="text-blue-800"
                    size={30} 
                    icon={FcGoogle}
                    title="Google"
                    classTitle="text-[18px] font-medium"
                    />
                    <Button
                    className="w-full pt-2 pb-2 pr-5 pl-5 border-[2px] rounded-md hover:border-gray-700 dark:border-gray-700 cursor-pointer hover:dark:border-gray-400 dark:text-white duration-200"
                    classIcon="text-blue-800 dark:text-white"
                    size={30} 
                    icon={AiFillFacebook}
                    title="Facebook"
                    classTitle="text-[18px] font-medium"
                    />
                </div>
            </div>
            <div className="w-full border-t-[2px] dark:border-gray-700"/>
            <div className="flex flex-col w-full space-y-4 pt-8">
                <div className="font-medium dark:text-white text-[16px]">Or continue with email address</div>
                <TextInput 
                className=""
                placeholder="Your email"
                required
                name="email"
                icon={AiOutlineMail}
                sizeIcon={28}
                />
                <TextInput 
                placeholder="Password"
                className=""
                name="password"
                type="password"
                required
                icon={AiFillLock}
                sizeIcon={28}
                />
                <Button 
                className="p-2 bg-blue-500 rounded-lg flex items-center justify-center w-full font-medium text-white text-[18px] hover:bg-blue-600 cursor-pointer duration-200"
                title="Sign in"/>
            </div>
            <div className="flex items-center justify-center mt-8 font-medium text-[15px] text-gray-400">
            This site is protected by reCAPTCHA and the Google Privacy Policy.
            </div>
            <div className="flex items-center mt-8">
              <div className="text-gray-500 font-medium">Don’t have an account ?</div>
              <Link 
              className="ml-2 font-bold dark:text-white hover:text-blue-600 dark:hover:text-blue-600 duration-200"
              to="/SignUp"
              > 
                Sign up
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
