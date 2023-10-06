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
    <div className='w-full sm:w-[446px] md:w-[380px]'>
      <div className='flex flex-col items-center justify-center w-full'>
        <Title
          title='Staying.com'
          fontBold
          titleCustom='text-[32px] sm:text-[36px]'
          colorTitle='text-hotel-50 mb-8'
        />
        <Title
          title='Check your inbox'
          colorTitle='dark:text-white'
          fontMedium
          extraLarge4
        />

        <Title
          title="We've just emailed a verification link to"
          colorTitle='dark:text-primary-50'
          xl
        />

        <Title title={email} fontBold colorTitle='dark:text-white' large />

        <Title
          title='Once it arrives, it will be valid for 15 minutes.'
          colorTitle='dark:text-primary-50'
          xl
        />

        <Button
          title='Back to login'
          classTitle='text-hotel-50'
          fontBold
          xxl
          className='w-full p-2 ml-0 mr-0 mt-8 mb-8 duration-300'
          border
          onClick={handleBackLogin}
        />

        <Title
          title='All rights reserved.
Copyright 2023 - Staying.com™'
          colorTitle='dark:text-white'
          xl
          nowrap={false}
        />
      </div>
    </div>
  );
}

export default Check;
