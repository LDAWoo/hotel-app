import ComponentHost from "../ComponentHost";
import ComponentPhotoHost from "./ComponentPhotoHost";
import FooterHost from "../FooterHost";
import ComponentNotificationPhoto from "./ComponentNotificationPhoto";
const PhotoHost = () => {
  return (
    <ComponentHost
      title='What dose your hotel look like?'
      classComponentLeft
      componentLeft={<ComponentPhotoHost />}
      componentRight={<ComponentNotificationPhoto />}
      footer={<FooterHost />}
    />
  );
};

export default PhotoHost;
