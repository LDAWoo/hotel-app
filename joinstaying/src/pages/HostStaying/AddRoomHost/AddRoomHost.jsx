import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentAddRoom from "./ComponentAddRoom";
import ComponentNotificationAddRoom from "./ComponentNotificationAddRoom";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";
import useRegisterAddRoom from "../../../hooks/JoinStaying/AddRoomHost/useRegisterAddRoom";

function AddRoomHost() {
  const navigate = useNavigate();
  const { roomType, quantityRoom, roomArea } = useRegisterAddRoom();

  const handleBack = () => {
    navigate(routesConfig.becomeAHostOverviewRoom);
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostBathRoom);
  };

  return <ComponentHost title="Room details" componentLeft={<ComponentAddRoom />} componentRight={<ComponentNotificationAddRoom />} footer={<FooterHost disabled={roomType === "" || quantityRoom <= 0 || roomArea <= 0} onBack={handleBack} onContinue={handleContinue} />} />;
}

export default AddRoomHost;
