import { useNavigate } from "react-router-dom";
import Button from "../../../components/Buttons/Button";
import Title from "../../../components/Title/Title";
import routesConfig from "../../../configs/routesConfig";
import useRegisterUserRegister from "../../../hooks/Register/useRegisterUserRegister";
function Check() {
  const { email } = useRegisterUserRegister();
  const navigate = useNavigate();
  const handleBackLogin = () => {
    navigate(routesConfig.login);
  };
  return (
    <div className='w-full vsm:w-[400px] sm:w-[446px] md:w-[380px]'>
      <div className='flex flex-col items-center justify-center'>
        <Title
          title='Staying.com'
          fontBold
          titleCustom='text-[28px] sm:text-[32px]'
          colorTitle='text-hotel-50 mb-8'
        />
        <Title
          title='Check your inbox'
          colorTitle='dark:text-white'
          fontMedium
          xxl
        />

        <Title
          title="We've just emailed a verification link to"
          colorTitle='dark:text-primary-50'
          medium
        />

        <Title title={email} fontBold colorTitle='dark:text-white' large />

        <Title
          title='Once it arrives, it will be valid for 15 minutes.'
          colorTitle='dark:text-primary-50'
          medium
        />

        <Button
          title='Back to login'
          classTitle='text-hotel-50'
          fontBold
          xl
          className='flex flex-row items-center justify-center border dark:border-hotel-100 w-full p-2 ml-0 mr-0 mt-8 mb-8 hover:opacity-60 duration-300'
          onClick={handleBackLogin}
        />

        <Title
          title='All rights reserved.
Copyright 2023 - Staying.com™'
          colorTitle='dark:text-white'
          medium
        />
      </div>
    </div>
  );
}

export default Check;
