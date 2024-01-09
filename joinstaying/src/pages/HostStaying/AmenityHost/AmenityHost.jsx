import ComponentHost from "../ComponentHost";
import ComponentAmenity from "./ComponentAmenity";
import FooterHost from "../FooterHost";
import ComponentNotificationAmenity from "./ComponentNotificationAmenity";

function AmenityHost() {
  return (
    <ComponentHost
      title='What can guests use in this room?'
      componentLeft={<ComponentAmenity />}
      componentRight={<ComponentNotificationAmenity />}
      footer={<FooterHost />}
    />
  );
}

export default AmenityHost;
