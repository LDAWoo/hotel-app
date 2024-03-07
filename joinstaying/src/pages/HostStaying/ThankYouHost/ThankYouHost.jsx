import { BiCheck } from "react-icons/bi";
import Icon from "../../../components/Icon/Icon";
import Title from "../../../components/Title/Title";
import useRegisterCreateRoom from "../../../hooks/JoinStaying/CreateRoom/useRegisterCreateRoom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";
import { useTranslation } from "react-i18next";

const ThankYouHost = () => {
  const { completeConfirm } = useRegisterCreateRoom();
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!completeConfirm) {
      navigate(routesConfig.home);
    }
  }, [completeConfirm]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row p-4 border border-gray-100 gap-2 mt-4">
        <Icon icon={BiCheck} size={20} classIcon="text-success-50" />
        <Title title={t("HostStaying.ThankYou.items.title")} nowrap={false} xl fontMedium />
      </div>
      {/* <ComponentHost componentLeft={<ComponentThanhYou />} /> */}
    </div>
  );
};

ThankYouHost.propTypes = {};

export default ThankYouHost;
