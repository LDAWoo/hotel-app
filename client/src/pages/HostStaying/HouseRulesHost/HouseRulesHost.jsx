import ComponentHost from "../ComponentHost";
import ComponentHouseRules from "./ComponentHouseRules";
import ComponentNotificationHouseRules from "./ComponentNotificationHouseRules";
import FooterHost from "../FooterHost";

function HouseRules() {
  const handleBack = () => {};
  return (
    <ComponentHost
      title='House rules'
      componentLeft={<ComponentHouseRules />}
      componentRight={<ComponentNotificationHouseRules />}
      footer={<FooterHost onBack={handleBack} />}
    />
  );
}

export default HouseRules;
