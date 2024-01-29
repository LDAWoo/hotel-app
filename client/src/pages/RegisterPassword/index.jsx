import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Title from "../../components/Title/Title";
import { useTranslation } from "react-i18next";
import TextInput from "../../components/TextInput/TextInput";
import TextError from "../../components/TextError/TextError";
import { useEffect, useState } from "react";
import Border from "../../components/Border/Border";
import { validatePassword } from "../../Regexs/Validate/Password";
import { LiaEyeSlashSolid } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";
import useRegisterEmail from "../../hooks/Account/Register/useRegisterEmail";
import routesConfig from "../../configs/routesConfig";
import { postRegister } from "../../api/User/Register";
import useRegisterContactDetails from "../../hooks/Account/Register/useRegisterContactDetails";
import useRegisterCheckEmail from "../../hooks/Account/CheckEmail/useRegisterCheckEmail";
function RegisterPassword() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { currentEmail } = useRegisterEmail();
  const { currentFirstName, currentLastName, currentPhoneNumber } =
    useRegisterContactDetails();

  const { email } = useRegisterCheckEmail();

  useEffect(() => {
    if (!currentEmail.length > 0) {
      navigate(routesConfig.register);
    } else {
      if (currentEmail === email) {
        navigate(routesConfig.register);
      }
    }
  }, [currentEmail, navigate, email]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [loading, setLoading] = useState();

  const handleChangePassword = (e) => {
    const value = e.target.value.trim();

    if (!value.length > 0) {
      setErrorPassword(t("Error.Account.passwordNotBlank"));
    } else {
      setErrorPassword("");
    }
    setPassword(value);
  };
  const handleChangeConfirmPassword = (e) => {
    const value = e.target.value.trim();

    if (!value.length > 0) {
      setErrorConfirmPassword(t("Error.Account.confirmPasswordNotBlank"));
    } else {
      setErrorConfirmPassword("");
    }
    setConfirmPassword(value);
  };
  const handleRegister = () => {
    if (!validate()) return;

    const data = {
      email: currentEmail,
      password: password,
      firstName: currentFirstName,
      lastName: currentLastName,
      phoneNumber: currentPhoneNumber,
    };

    const fetchData = async () => {
      try {
        setLoading(true);
        await postRegister(data);
        setLoading(false);
        navigate(routesConfig.checkEmail);
      } catch (error) {
        navigate(routesConfig.register);
      }
    };
    fetchData();
  };

  const validate = () => {
    let isValid = true;

    if (password === "") {
      setErrorPassword(t("Error.Account.passwordNotBlank"));
      isValid = false;
    } else {
      if (!validatePassword(password)) {
        isValid = false;
        setErrorPassword(t("Error.Account.passwordNotPassword"));
      } else {
        setErrorPassword("");
      }
    }

    if (confirmPassword === "") {
      setErrorConfirmPassword(t("Error.Account.confirmPasswordNotBlank"));
      isValid = false;
    } else {
      if (confirmPassword !== password) {
        setErrorConfirmPassword(t("Error.Account.confirmPasswordNotPassword"));
        isValid = false;
      } else {
        setErrorConfirmPassword("");
      }
    }

    return isValid;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleRegister();
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className='w-full h-full'>
      <div className='flex flex-col'>
        <Title
          title={t("RegisterPassword.title")}
          extraLarge4
          nowrap={false}
          fontBold
          className=' dark:text-white'
        />
        <Title
          title={t("RegisterPassword.subTitle")}
          xl
          nowrap={false}
          className=' dark:text-white mb-5'
        />
      </div>
      <div className='flex flex-col w-full gap-2 pt-8'>
        <Title title={t("RegisterPassword.password")} fontMedium xl />
        <TextInput
          placeholder={t("RegisterPassword.password")}
          value={password}
          type={showPassword ? "text" : "password"}
          id='password'
          error={errorPassword.length > 0}
          required
          name='firstName'
          copy
          classCopy='absolute top-0 bottom-0 flex items-center right-0 cursor-pointer hover:bg-gray-100 p-2 rounded-tr-sm rounded-br-sm duration-200'
          onClickCopy={handleShowPassword}
          iconCopy={showPassword ? LiaEyeSlashSolid : LiaEyeSolid}
          sizeIconCopy={18}
          sizeIcon={24}
          onChange={handleChangePassword}
          onKeyDown={handleKeyPress}
        />
        <TextError error={errorPassword} />
        <Title title={t("RegisterPassword.confirmPassword")} fontMedium xl />
        <TextInput
          placeholder={t("RegisterPassword.confirmPassword")}
          value={confirmPassword}
          type={showConfirmPassword ? "text" : "password"}
          id='confirmPassword'
          copy
          classCopy='absolute top-0 bottom-0 flex items-center right-0 cursor-pointer hover:bg-gray-100 p-2 rounded-tr-sm rounded-br-sm duration-200'
          onClickCopy={handleShowConfirmPassword}
          iconCopy={showConfirmPassword ? LiaEyeSlashSolid : LiaEyeSolid}
          error={errorConfirmPassword.length > 0}
          required
          name='lastName'
          sizeIconCopy={18}
          sizeIcon={24}
          onChange={handleChangeConfirmPassword}
          onKeyDown={handleKeyPress}
        />
        <TextError error={errorConfirmPassword} />

        <Button
          background
          disabled={loading}
          loading={loading}
          fontMedium
          className='mt-4 p-2 rounded-[4px] flex items-center justify-center w-full '
          onClick={handleRegister}
          title={t("RegisterPassword.registerAccount")}
        />
      </div>

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

export default RegisterPassword;
