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
import { validateEmail } from "../../Regexs/Validate/Email";
import { validatePassword } from "../../Regexs/Validate/Password";
import routesConfig from "../../configs/routesConfig";

function Login() {
  const { handleLoginWithGoogle, handleLoginWithFacebook, handleLogin, loading } = useContext(UserContext);

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
    <div className="w-full h-full">
      <Title title={t("Login.title")} extraLarge4 nowrap={false} fontBold className=" dark:text-white mb-5" />

      <div className="flex flex-col w-full gap-2 pt-8">
        <Title title={t("Login.email")} fontMedium xl />
        <TextInput placeholder={t("Login.email")} id="email" error={errorEmail.length > 0} required name="email" sizeIcon={24} onChange={handleChange} />
        <TextError error={errorEmail} />
        <Title title={t("Login.password")} fontMedium xl />
        <TextInput placeholder={t("Login.password")} id="password" name="password" error={errorPassword.length > 0} type="password" required sizeIcon={24} onChange={handleChange} />
        <TextError error={errorPassword} />

        <Button disabled={loading} loading={loading} background fontMedium className="mt-4 p-2 rounded-[4px] flex items-center justify-center w-full " title={t("Login.login")} onClick={login} />
      </div>

      <Link to={routesConfig.forgotPassword}>
        <Button fontMedium xl className="mt-6 p-2 rounded-[4px] flex items-center justify-center w-full hover:bg-hotel-25 text-hotel-50" title={t("Login.forgot")} />
      </Link>

      <div className=" text-[12px] text-center mt-6">
        {t("Partner.partner")}
        <Link to="/" className="text-hotel-50">
          {" "}
          {t("Partner.help")}
        </Link>{" "}
        {t("Partner.more")}
      </div>

      <Link to={routesConfig.register}>
        <Button border fontMedium className="mt-6 p-2 rounded-[4px] flex items-center justify-center w-full " title={t("Login.register")} />
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

export default Login;
