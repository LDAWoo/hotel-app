import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Title from "../../components/Title/Title";
import routesConfig from "../../configs/routesConfig";
import useRegisterCheckEmail from "../../hooks/Account/CheckEmail/useRegisterCheckEmail";
import useRegisterEmail from "../../hooks/Account/Register/useRegisterEmail";

const CheckEmail = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { currentEmail } = useRegisterEmail();

  const { email, setCheckEmail } = useRegisterCheckEmail();

  useEffect(() => {
    if (!currentEmail.length > 0) {
      navigate(routesConfig.register);
    } else {
      setCheckEmail(currentEmail);
    }
  }, [currentEmail, navigate, setCheckEmail]);

  const handleBackLogin = () => {
    navigate(routesConfig.login);
  };

  return (
    <div>
      <div className="w-full sm:w-[446px] md:w-[380px]">
        <div className="flex flex-col text-center items-center justify-center w-full">
          <Title title="Staying.com" nowrap={false} fontBold className="text-[32px] sm:text-[36px] text-hotel-100 mb-8" />
          <Title title={t("CheckEmail.title")} className="dark:text-white" fontMedium extraLarge4 nowrap={false} />

          <Title title={t("CheckEmail.subTitle1")} className="dark:text-primary-50" xl nowrap={false} />

          <Title title={email} fontBold className="dark:text-white" xl nowrap={false} />

          <Title title={t("CheckEmail.subTitle2")} className="dark:text-primary-50" xl nowrap={false} />

          <Button title={t("CheckEmail.backLogin")} classTitle="text-hotel-100 text-center" fontBold xxl className="mt-4 p-2 rounded-[4px] flex items-center justify-center w-full " border onClick={handleBackLogin} />

          <div className="text-center text-[13px] mt-6">
            {t("AccessFooter.nameOne")}.<br /> {t("AccessFooter.nameTwo")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
