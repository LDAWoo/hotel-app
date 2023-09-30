import PropTypes from "prop-types";
import useRegisterModalImage from "../../../hooks/Image/useRegisterModalImage";
import ModalFullScreen from "../ModalFullScreen";

const ImageModal = ({ body }) => {
  const { isOpen, onClose } = useRegisterModalImage();
  return <ModalFullScreen body={body} isOpen={isOpen} onClose={onClose} />;
};

ImageModal.propTypes = {
  body: PropTypes.node.isRequired,
};

export default ImageModal;
