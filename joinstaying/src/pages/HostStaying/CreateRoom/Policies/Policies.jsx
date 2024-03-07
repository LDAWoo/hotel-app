import { useContext, useState } from "react";
import { postAddHotelPolicies } from "../../../../api/HostStaying/PoliciesHost";
import { UserContext } from "../../../../components/Contexts/AppUserProvider";
import Title from "../../../../components/Title/Title";
import useRegisterPolicies from "../../../../hooks/JoinStaying/CreateRoom/Policies/useRegisterPolicies";
import ComponentHost from "../../ComponentHost";
import FooterHost from "../../FooterHost";
import ComponentPolicies from "./ComponentPolicies";
import ComponentNotificationHotelPolicy from "./ComponentNotificationHotelPolicy";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../../configs/routesConfig";
import useRegisterCreateRoom from "../../../../hooks/JoinStaying/CreateRoom/useRegisterCreateRoom";
import { useTranslation } from "react-i18next";

const Policies = () => {
  const { t } = useTranslation();
  const { token, sessionToken } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { bookingPolicy, cancellationPolicy, petPolicy, smokingPolicy, additionalPolices } = useRegisterPolicies();
  const navigate = useNavigate();
  const { setComplete } = useRegisterCreateRoom();

  const handleSaveAndContinue = async () => {
    const data = {
      bookingPolicy,
      cancellationPolicy,
      petPolicy,
      smokingPolicy,
      additionalPolices,
    };

    try {
      setLoading(true);
      await postAddHotelPolicies(data, token, sessionToken);
      setLoading(false);
      setComplete("completePolicies", true);
      navigate(`${routesConfig.becomeAHostCreateRoom}${`?token=${sessionToken}&source=payment`}`);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(`${routesConfig.becomeAHostCreateRoom}${`?token=${sessionToken}&source=photos`}`);
  };

  return (
    <div className="flex flex-col">
      <div className="p-4 gap-4 flex flex-col">
        <div className="flex flex-col">
          <Title title={t("HostStaying.CreateRoom.items.policies.title")} nowrap={false} fontBold extraLarge4 colorTitle="dark:text-white" />
          <Title title={t("HostStaying.CreateRoom.items.policies.subTitle")} nowrap={false} xl />
        </div>
      </div>

      <ComponentHost componentLeft={<ComponentPolicies />} componentRight={<ComponentNotificationHotelPolicy />} footer={<FooterHost disabled={loading} onBack={handleBack} onContinue={handleSaveAndContinue} />} loading={loading} />
    </div>
  );
};

Policies.propTypes = {};

export default Policies;
