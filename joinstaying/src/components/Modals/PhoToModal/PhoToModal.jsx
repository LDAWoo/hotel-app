import useRegisterAIImageModal from "../../../hooks/JoinStaying/PhotoHost/useRegisterAIImageModal";
import Modals from "../Modals";

const PhoToModal = ({ ...prop }) => {
  const { isOpen, onClose } = useRegisterAIImageModal();
  return <Modals isOpen={isOpen} onClose={onClose} {...prop} />;
};

export default PhoToModal;
