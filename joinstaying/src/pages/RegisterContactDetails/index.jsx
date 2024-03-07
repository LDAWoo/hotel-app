import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getCountryCallingCode } from "react-phone-number-input";
import { Link, useNavigate } from "react-router-dom";
import Border from "../../components/Border/Border";
import Button from "../../components/Buttons/Button";
import InputStaying from "../../components/Staying/Input";
import TextError from "../../components/TextError/TextError";
import TextInput from "../../components/TextInput/TextInput";
import Title from "../../components/Title/Title";
import routesConfig from "../../configs/routesConfig";
import useRegisterCheckEmail from "../../hooks/Account/CheckEmail/useRegisterCheckEmail";
import useRegisterContactDetails from "../../hooks/Account/Register/useRegisterContactDetails";
import useRegisterEmail from "../../hooks/Account/Register/useRegisterEmail";
import { validatePhone } from "../../Regexs/Validate/Phone";

function RegisterContactDetails() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentEmail } = useRegisterEmail();
  const { currentFirstName, currentLastName, currentPhoneNumber, setContactDetails } = useRegisterContactDetails();

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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [countryCode, setCountryCode] = useState("VN");
  const [countryValue, setCountryValue] = useState("84");

  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState("");

  useEffect(() => {
    setFirstName(currentFirstName);
  }, [currentFirstName]);

  useEffect(() => {
    setLastName(currentLastName);
  }, [currentLastName]);

  useEffect(() => {
    setPhoneNumber(currentPhoneNumber);
  }, [currentPhoneNumber]);

  useEffect(() => {
    if (errorFirstName.length > 0 || errorLastName.length > 0 || errorPhoneNumber.length > 0) {
      validate();
    }
  }, [i18next.language]);

  const handleChangeFirstName = (e) => {
    const value = e.target.value.trim();
    if (!value.length > 0) {
      setErrorFirstName(t("Error.Account.firstNameNotBlank"));
    } else {
      setErrorFirstName("");
    }
    setFirstName(value);
  };
  const handleChangeLastName = (e) => {
    const value = e.target.value.trim();
    if (!value.length > 0) {
      setErrorLastName(t("Error.Account.lastNameNotBlank"));
    } else {
      setErrorLastName("");
    }
    setLastName(value);
  };
  const handleChangePhoneNumber = (e) => {
    const value = e.target.value.trim();
    if (!value.length > 0) {
      setErrorPhoneNumber(t("Error.Account.phoneNumberNotBlank"));
    } else {
      if (!validatePhone(value)) {
        setErrorPhoneNumber(t("Error.Account.phoneNumberNotPhone"));
      } else {
        setErrorPhoneNumber("");
      }
    }
    setPhoneNumber(value);
  };

  const handleContinue = () => {
    if (!validate()) return;
    setContactDetails("currentFirstName", firstName);
    setContactDetails("currentLastName", lastName);
    setContactDetails("currentPhoneNumber", phoneNumber);
    navigate(routesConfig.registerPassword);
  };

  const validate = () => {
    let isValid = true;
    if (firstName === "") {
      setErrorFirstName(t("Error.Account.firstNameNotBlank"));
      isValid = false;
    } else {
      setErrorFirstName("");
    }

    if (lastName === "") {
      setErrorLastName(t("Error.Account.lastNameNotBlank"));
      isValid = false;
    } else {
      setErrorLastName("");
    }

    if (phoneNumber === "") {
      setErrorPhoneNumber(t("Error.Account.phoneNumberNotBlank"));
      isValid = false;
    } else {
      setErrorPhoneNumber("");
    }

    return isValid;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleContinue();
    }
  };

  const handleSelectCountry = (e) => {
    const selectedCountryCode = e.target.value;
    setCountryCode(selectedCountryCode);
    setCountryValue(getCountryCallingCode(selectedCountryCode));
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Title title={t("RegisterContactDetails.title")} extraLarge4 nowrap={false} fontBold className=" dark:text-white" />
        <Title title={t("RegisterContactDetails.subTitle")} xl nowrap={false} className=" dark:text-white mb-5" />
      </div>
      <div className="flex flex-col w-full gap-2 pt-8">
        <Title title={t("RegisterContactDetails.firstName")} fontMedium xl />
        <TextInput placeholder={t("RegisterContactDetails.firstName")} value={firstName} type="text" id="firstName" error={errorFirstName.length > 0} required name="firstName" sizeIcon={24} onChange={handleChangeFirstName} onKeyDown={handleKeyPress} />
        <TextError error={errorFirstName} />
        <Title title={t("RegisterContactDetails.lastName")} fontMedium xl />
        <TextInput placeholder={t("RegisterContactDetails.lastName")} value={lastName} type="text" id="lastName" error={errorLastName.length > 0} required name="lastName" sizeIcon={24} onChange={handleChangeLastName} onKeyDown={handleKeyPress} />
        <TextError error={errorLastName} />
        <Title title={t("RegisterContactDetails.phoneNumber")} fontMedium xl />
        <InputStaying
          className="bg-transparent hover:bg-transparent rounded-lg w-full h-[35px] pt-1 pb-1 pr-[10px] outline-none text-primary-700 placeholder:text-primary-100 dark:placeholder:text-primary-50 dark:text-white font-normal text-[14px]"
          type="number"
          country="VN"
          countryCode={countryCode}
          error={errorPhoneNumber.length > 0}
          sizeIcon={24}
          required
          countryValue={"+" + countryValue}
          value={phoneNumber}
          handleSelectCountry={handleSelectCountry}
          onChange={handleChangePhoneNumber}
          onKeyDown={handleKeyPress}
        />
        <TextError error={errorPhoneNumber} />
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

export default RegisterContactDetails;
