import useRegisterModalMap from "../../../hooks/useRegisterModalMap";
import ModalFullScreen from "../ModalFullScreen";
import Body from "./Body";

function MapModal() {
  const { isOpen, onClose } = useRegisterModalMap();
  return (
    <ModalFullScreen
      isOpen={isOpen}
      onClose={onClose}
      body={<Body />}
    ></ModalFullScreen>
  );
}

export default MapModal;
