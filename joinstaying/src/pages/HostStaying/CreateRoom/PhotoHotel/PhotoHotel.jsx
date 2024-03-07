import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAddPhoto } from "../../../../api/HostStaying/PhotoHost";
import { UserContext } from "../../../../components/Contexts/AppUserProvider";
import Title from "../../../../components/Title/Title";
import routesConfig from "../../../../configs/routesConfig";
import useRegisterPhoto from "../../../../hooks/JoinStaying/PhotoHost/useRegisterPhoTo";
import ComponentHost from "../../ComponentHost";
import FooterHost from "../../FooterHost";
import ComponentNotificationPhoto from "./ComponentNotificationPhoto";
import ComponentPhotoHotel from "./ComponentPhotoHotel";
import useRegisterCreateRoom from "../../../../hooks/JoinStaying/CreateRoom/useRegisterCreateRoom";
import { useTranslation } from "react-i18next";

const PhotoHotel = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { token, sessionToken } = useContext(UserContext);
  const { photos } = useRegisterPhoto();
  const [loading, setLoading] = useState(false);
  const { setComplete } = useRegisterCreateRoom();

  const handleSaveAndContinue = async () => {
    const formData = new FormData();

    for (const photo of photos) {
      const response = await fetch(photo.url);
      const blob = await response.blob();
      formData.append("images", blob, photo.name);
    }

    try {
      setLoading(true);
      await postAddPhoto(formData, token, sessionToken);
      setLoading(false);
      setComplete("completePhoto", true);
      navigate(`${routesConfig.becomeAHostCreateRoom}${`?token=${sessionToken}&source=policies`}`);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const handleBack = () => {
    navigate(`${routesConfig.becomeAHostCreateRoom}${`?token=${sessionToken}&source=amenities`}`);
  };

  return (
    <div className="flex flex-col">
      <div className="p-4 gap-4 flex flex-col">
        <div className="flex flex-col">
          <Title title={t("HostStaying.CreateRoom.items.photo.title")} nowrap={false} fontBold extraLarge4 colorTitle="dark:text-white" />
          <Title title={t("HostStaying.CreateRoom.items.photo.subTitle")} nowrap={false} xl />
        </div>
      </div>

      <ComponentHost componentLeft={<ComponentPhotoHotel />} componentRight={<ComponentNotificationPhoto />} footer={<FooterHost onContinue={handleSaveAndContinue} onBack={handleBack} disabled={photos.length === 0} />} loading={loading} />
    </div>
  );
};

PhotoHotel.propTypes = {};

export default PhotoHotel;
