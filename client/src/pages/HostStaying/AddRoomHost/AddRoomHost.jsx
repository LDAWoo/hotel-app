import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentAddRoom from "./ComponentAddRoom";
import ComponentNotificationAddRoom from "./ComponentNotificationAddRoom";

function AddRoomHost() {
  return (
    <ComponentHost
      title='Room details'
      componentLeft={<ComponentAddRoom />}
      componentRight={<ComponentNotificationAddRoom />}
      footer={<FooterHost />}
    />
  );
}

export default AddRoomHost;
