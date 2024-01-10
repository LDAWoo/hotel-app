import { Link, useNavigate } from "react-router-dom";
import Border from "../../components/Border/Border";
import Button from "../../components/Buttons/Button";
import Title from "../../components/Title/Title";
import { useTranslation } from "react-i18next";
import useRegisterEmail from "../../hooks/Account/Forgot/useRegisterEmail";
import { useEffect, useState } from "react";
import routesConfig from "../../configs/routesConfig";

function ForgotConfirmPassword() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { currentEmail } = useRegisterEmail();
  const [encodedEmail, setEncodeEmail] = useState("");
  useEffect(() => {
    if (!currentEmail.length > 0) {
      navigate(routesConfig.forgotPassword);
    } else {
      const encodeEmail = (email) => {
        const atIndex = email.indexOf("@");
        const firstPart = email.slice(0, 1);
        const lastPart = email.slice(atIndex);
        const hiddenPart = "*".repeat(atIndex - 1);

        return `${firstPart}${hiddenPart}${lastPart}`;
      };
      setEncodeEmail(encodeEmail(currentEmail));
    }
  }, [currentEmail, navigate]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Title title={t("ForgotConfirmation.title")} extraLarge4 nowrap={false} fontBold className=" dark:text-white" />
        <div>
          <Title title={t("ForgotConfirmation.subTitle1")} xl nowrap={false} className=" dark:text-white mb-5" /> <strong className="text-[14px]">{encodedEmail}</strong>
          {". "}
          <Title title={t("ForgotConfirmation.subTitle2")} xl nowrap={false} className=" dark:text-white mb-5" />
        </div>
      </div>

      <Link to={routesConfig.login}>
        <Button border fontMedium className="mt-6 p-2 rounded-[4px] flex items-center justify-center w-full " title={t("ForgotConfirmation.backLogin")} />
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

export default ForgotConfirmPassword;
