import i18next from "i18next";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import Border from "../../components/Border/Border";
import Button from "../../components/Buttons/Button";
import { UserContext } from "../../components/Contexts/AppUserProvider";
import TextError from "../../components/TextError/TextError";
import TextInput from "../../components/TextInput/TextInput";
import Title from "../../components/Title/Title";
import routesConfig from "../../configs/routesConfig";

function Login() {
  const { handleLoginWithGoogle, handleLoginWithFacebook, handleLogin, loading, errorLogin, setErrorLogin } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

  useEffect(() => {
    if (errorEmail.length > 0 || errorPassword.length > 0 || errorLogin.length > 0) {
      validate();
      if (errorLogin.length > 0) {
        setErrorLogin(t("Error.Account.loginFailed"));
      }
    }
  }, [i18next.language]);

  const login = () => {
    if (!validate()) return;
    handleLogin(formData);
  };

  const validate = () => {
    let isValid = true;

    if (email === "") {
      isValid = false;
      setState((prevState) => ({ ...prevState, errorEmail: t("Error.Account.emailNotBlank") }));
    } else {
      setState((prevState) => ({ ...prevState, errorEmail: "" }));
    }

    if (password === "") {
      isValid = false;
      setState((prevState) => ({
        ...prevState,
        errorPassword: t("Error.Account.passwordNotBlank"),
      }));
    } else {
      setState((prevState) => ({ ...prevState, errorPassword: "" }));
    }

    return isValid;
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-full">
      <Title title={t("Login.title")} extraLarge4 nowrap={false} fontBold className=" dark:text-white mb-5" />

      <div className="flex flex-col w-full gap-2 pt-8">
        <Title title={t("Login.email")} fontMedium xl />
        <TextInput placeholder={t("Login.email")} id="email" value={email} error={errorEmail.length > 0 || errorLogin.length > 0} required name="email" sizeIcon={24} onChange={handleChange} />
        <TextError error={errorEmail} />
        <Title title={t("Login.password")} fontMedium xl />
        <TextInput
          placeholder={t("Login.password")}
          id="password"
          name="password"
          error={errorPassword.length > 0 || errorLogin.length > 0}
          type={showPassword ? "text" : "password"}
          copy
          classCopy="absolute top-0 bottom-0 flex items-center right-0 cursor-pointer hover:bg-gray-100 p-2 rounded-tr-sm rounded-br-sm duration-200"
          onClickCopy={handleShowPassword}
          iconCopy={showPassword ? LiaEyeSlashSolid : LiaEyeSolid}
          sizeIconCopy={18}
          required
          value={password}
          sizeIcon={24}
          onChange={handleChange}
        />
        <TextError error={errorPassword} />

        <TextError error={errorLogin} />
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
