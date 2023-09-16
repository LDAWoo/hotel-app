import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { AiFillFacebook, AiFillLock, AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import Button from "../../../components/Buttons/Button";
import Image from "../../../components/Image/Image";
import TextInput from "../../../components/TextInput/TextInput";
import useRegisterUserRegister from "../../../hooks/Register/useRegisterUserRegister";

function Entry({ onClick }) {
  const { t } = useTranslation();
  const { firstName, lastName, email, password, passwordConfirm, setField } =
    useRegisterUserRegister();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setField(name, value);
  };

  return (
    <div className='min-w[296px] w-full sm:w-[446px] md:w-[380px]'>
      <div className='text-[32px] sm:text-[48px] md:text-[56px] font-bold dark:text-white mb-5'>
        {t("Register.title")}
      </div>
      <div className='pb-8'>
        <Link to='/'>
          <Image
            src='/images/logo-dark.png'
            srcDark='/images/logo-light.png'
            alt='Staying.com'
          />
        </Link>
        <div className='text-[16px] sm:text-[18px] md:text-[22px] font-medium dark:text-white mb-4'>
          {t("Register.registerWithOpenAccount")}
        </div>
        <div className='flex gap-2'>
          <Button
            className='w-full pt-2 pb-2 pr-5 pl-5 border-[2px] rounded-md hover:border-gray-700 dark:border-gray-700 cursor-pointer hover:dark:border-gray-400 dark:text-white duration-200'
            classIcon='text-blue-800'
            size={30}
            icon={FcGoogle}
            title='Google'
            classTitle='text-[18px] font-medium'
          />
          <Button
            className='w-full pt-2 pb-2 pr-5 pl-5 border-[2px] rounded-md hover:border-gray-700 dark:border-gray-700 cursor-pointer hover:dark:border-gray-400 dark:text-white duration-200'
            classIcon='text-blue-800 dark:text-white'
            size={30}
            icon={AiFillFacebook}
            title='Facebook'
            classTitle='text-[18px] font-medium'
          />
        </div>
      </div>
      <div className='w-full border-t-[2px] dark:border-gray-700' />
      <div className='flex flex-col w-full space-y-4 pt-8'>
        <div className='font-medium dark:text-white text-[16px]'>
          {t("Register.orContinueWithEmail")}
        </div>
        <div className='flex flex-row gap-1'>
          <TextInput
            type='text'
            placeholder={t("Register.firstName")}
            name='firstName'
            value={firstName}
            onChange={handleChange}
          />
          <TextInput
            type='text'
            placeholder={t("Register.lastName")}
            name='lastName'
            value={lastName}
            onChange={handleChange}
          />
        </div>

        <TextInput
          placeholder={t("Register.email")}
          required
          name='email'
          icon={AiOutlineMail}
          sizeIcon={28}
          value={email}
          onChange={handleChange}
        />

        <TextInput
          placeholder={t("Login.password")}
          name='password'
          type='password'
          required
          icon={AiFillLock}
          sizeIcon={28}
          value={password}
          onChange={handleChange}
        />

        <TextInput
          placeholder={t("Login.passwordConfirm")}
          className=''
          name='passwordConfirm'
          type='password'
          required
          icon={AiFillLock}
          sizeIcon={28}
          value={passwordConfirm}
          onChange={handleChange}
        />

        <Button
          className='p-2 bg-blue-500 rounded-lg flex items-center justify-center w-full font-medium text-white text-[18px] hover:bg-blue-600 cursor-pointer duration-200'
          title={t("Register.title")}
          onClick={onClick}
        />
      </div>
      <div className='flex items-center justify-center mt-8 font-medium text-[15px] text-gray-400'>
        {t("Register.description")}
      </div>
      <div className='flex items-center mt-8'>
        <div className='text-gray-500 font-medium'>
          {t("Register.alreadyAMember")}
        </div>
        <Link
          className='ml-2 font-bold dark:text-white hover:text-blue-600 dark:hover:text-blue-600 duration-200'
          to='/login'
        >
          {t("Register.login")}
        </Link>
      </div>
    </div>
  );
}

Entry.propTypes = {
  onClick: PropTypes.func,
};

export default Entry;
