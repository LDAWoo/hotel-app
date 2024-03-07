import { useTranslation } from "react-i18next";
import Title from "../../../../components/Title/Title";
import ComponentIndividual from "./ComponentIndividual";

const ComponentPartner = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <Title title={t("HostStaying.CreateRoom.items.payment.information.subTitle2")} xl nowrap={false} className="dark:text-primary-50" />
      <ComponentIndividual />
    </div>
  );
};

export default ComponentPartner;
