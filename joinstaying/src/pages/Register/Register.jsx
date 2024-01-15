import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Border from "../../components/Border/Border";
import Button from "../../components/Buttons/Button";
import TextError from "../../components/TextError/TextError";
import TextInput from "../../components/TextInput/TextInput";
import Title from "../../components/Title/Title";
import routesConfig from "../../configs/routesConfig";
import useRegisterEmail from "../../hooks/Account/Register/useRegisterEmail";

function Register() {
  const navigate = useNavigate();
  const { currentEmail, setCurrentEmail } = useRegisterEmail();
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const { t } = useTranslation();

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

  useEffect(() => {
    if (errorEmail.length > 0) {
      validate();
    }
  }, [i18next.language]);

  const handleContinue = () => {
    if (!validate()) return;
    setCurrentEmail(email);
    navigate(routesConfig.contactDetails);
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
      handleContinue();
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Title title={t("Register.title")} extraLarge4 nowrap={false} fontBold className=" dark:text-white" />
        <Title title={t("Register.subTitle")} xl nowrap={false} className=" dark:text-white mb-5" />
      </div>
      <div className="flex flex-col w-full gap-2 pt-8">
        <Title title={t("Register.email")} fontMedium xl />
        <TextInput placeholder={t("Register.email")} id="email" value={email} error={errorEmail.length > 0} required name="email" sizeIcon={24} onChange={handleChange} onKeyDown={handleKeyPress} />
        <TextError error={errorEmail} />

        <Button background fontMedium className="mt-4 p-2 rounded-[4px] flex items-center justify-center w-full " onClick={handleContinue} title={t("Register.continue")} />
      </div>

      <div className=" text-[12px] text-center mt-6">
        {t("Partner.partner")}
        <Link to="/" className="text-hotel-50">
          {" "}
          {t("Partner.help")}
        </Link>{" "}
        {t("Partner.more")}
      </div>

      <Link to={routesConfig.login}>
        <Button border fontMedium className="mt-6 p-2 rounded-[4px] flex items-center justify-center w-full " title={t("Login.login")} />
      </Link>
      <Border className="mt-6" />

      <div className="text-[12px] text-center mt-6">
        {t("FooterAccount.nameOne")}
        <Link to="/" className="text-hotel-50">
          {" "}
          {t("FooterAccount.nameTwo")}
        </Link>{" "}
        {t("FooterAccount.nameThree")}
        <Link to="/" className="text-hotel-50">
          {" "}
          {t("FooterAccount.nameFour")}
        </Link>{" "}
        {t("FooterAccount.nameFive")}
      </div>
      <Border className="mt-6" />
      <div className="text-center text-[13px] mt-6">
        {t("AccessFooter.nameOne")}.<br /> {t("AccessFooter.nameTwo")}
      </div>
    </div>
  );
}

export default Register;
