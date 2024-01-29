import ComponentHost from "../ComponentHost";
import ComponentPhotoHost from "./ComponentPhotoHost";
import FooterHost from "../FooterHost";
import ComponentNotificationPhoto from "./ComponentNotificationPhoto";
import PhotoModal from "../../../components/Modals/PhoToModal/PhoToModal";
import BodyAIImage from "./BodyAIImage";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";
import useRegisterPhoto from "../../../hooks/JoinStaying/PhotoHost/useRegisterPhoTo";
import { postAddPhoto } from "../../../api/HostStaying/PhotoHost";
import { useContext, useState } from "react";
import { UseToken } from "../../../components/Contexts/AppTokenProvider";

const PhotoHost = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { photos } = useRegisterPhoto();
  const { token } = useContext(UseToken);

  const formData = new FormData();

  const handleBack = () => {
    navigate(routesConfig.becomeAHostOverviewRoom);
  };

  const handleContinue = async () => {
    const urls = photos.map((photo) => photo.url);

    urls.forEach((file, index) => {
      formData.append(`image-${index + 1}`, file);
    });

    console.log(urls);
    if (token) {
      try {
        setLoading(true);
        const response = await postAddPhoto(urls, token);
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <ComponentHost title="What dose your hotel look like?" classComponentLeft componentLeft={<ComponentPhotoHost />} componentRight={<ComponentNotificationPhoto />} footer={<FooterHost onBack={handleBack} onContinue={handleContinue} />} loading={loading} />
      <PhotoModal body={<BodyAIImage />} />
    </div>
  );
};

export default PhotoHost;
