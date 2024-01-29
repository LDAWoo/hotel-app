import { Link, useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import Border from "../../components/Border/Border";
import TextInput from "../../components/TextInput/TextInput";
import TextError from "../../components/TextError/TextError";
import Button from "../../components/Buttons/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useRegisterEmail from "../../hooks/Account/Forgot/useRegisterEmail";
import routesConfig from "../../configs/routesConfig";

function ForgotPassword() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { currentEmail, setCurrentEmail } = useRegisterEmail();
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  useEffect(() => {
    setEmail(currentEmail);
  }, [currentEmail]);

  const handleChange = (e) => {
    const value = e.target.value.trim();
    if (value.length > 0) {
      setErrorEmail("");
    } else {
      setErrorEmail(t("Error.Account.emailNotBlank"));
    }
    setEmail(value);
  };

  const handleSendLink = () => {
    if (!validate()) return;
    setCurrentEmail(email);
    navigate(routesConfig.forgotConfirmation);
  };

  const validate = () => {
    let isValid = true;
    if (email === "") {
      isValid = false;
      setErrorEmail(t("Error.Account.emailNotBlank"));
      return isValid;
    } else {
      setErrorEmail("");
    }

    // if (!validateEmail(email)) {
    //   setErrorEmail(t("Error.Account.emailNotEmail"));
    //   isValid = false;
    // } else {
    //   setErrorEmail("");
    // }
    return isValid;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendLink();
    }
  };
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col'>
        <Title
          title={t("Forgot.title")}
          extraLarge4
          nowrap={false}
          fontBold
          className=' dark:text-white'
        />
        <Title
          title={t("Forgot.subTitle")}
          xl
          nowrap={false}
          className=' dark:text-white mb-5'
        />
      </div>
      <div className='flex flex-col w-full gap-2 pt-8'>
        <Title title={t("Forgot.email")} fontMedium xl />
        <TextInput
          placeholder={t("Forgot.email")}
          id='email'
          value={email}
          error={errorEmail.length > 0}
          required
          name='email'
          sizeIcon={24}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <TextError error={errorEmail} />

        <Button
          background
          fontMedium
          className='mt-4 p-2 rounded-[4px] flex items-center justify-center w-full '
          onClick={handleSendLink}
          title={t("Forgot.sendLink")}
        />
      </div>

      <div className=' text-[12px] text-center mt-6'>
        {t("Partner.partner")}
        <Link to='/' className='text-hotel-50'>
          {" "}
          {t("Partner.help")}
        </Link>{" "}
        {t("Partner.more")}
      </div>

      <Link to='/login'>
        <Button
          border
          fontMedium
          className='mt-6 p-2 rounded-[4px] flex items-center justify-center w-full '
          title={t("Login.login")}
        />
      </Link>
      <Border className='mt-6' />

      <div className='text-[12px] text-center mt-6'>
        {t("FooterAccount.nameOne")}
        <Link to='/' className='text-hotel-50'>
          {" "}
          {t("FooterAccount.nameTwo")}
        </Link>{" "}
        {t("FooterAccount.nameThree")}
        <Link to='/' className='text-hotel-50'>
          {" "}
          {t("FooterAccount.nameFour")}
        </Link>{" "}
        {t("FooterAccount.nameFive")}
      </div>
      <Border className='mt-6' />
      <div className='text-center text-[13px] mt-6'>
        {t("AccessFooter.nameOne")}.<br /> {t("AccessFooter.nameTwo")}
      </div>
    </div>
  );
}

export default ForgotPassword;
