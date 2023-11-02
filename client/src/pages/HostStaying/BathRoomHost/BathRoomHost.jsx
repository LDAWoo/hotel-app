import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentBathRoom from "./ComponentBathRoom";
import ComponentNotificationBathRoom from "./ComponentNotificationBathRoom";

function BathRoomHost() {
  return (
    <ComponentHost
      title='Bathroom details'
      componentLeft={<ComponentBathRoom />}
      componentRight={<ComponentNotificationBathRoom />}
      footer={<FooterHost />}
    />
  );
}

export default BathRoomHost;
