import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentNotificationUnitName from "./ComponentNotificationUnitName";
import ComponentUnitName from "./ComponentUnitName";

function UnitNameHost() {
  return (
    <ComponentHost
      title='What’s the name of this room?'
      componentLeft={<ComponentUnitName />}
      componentRight={<ComponentNotificationUnitName/>}
      footer={<FooterHost />}
    />
  );
}

export default UnitNameHost;
