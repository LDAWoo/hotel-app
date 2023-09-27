import ModalCustomScreen from "../ModalCustomScreen";
import useRegisterModalReview from "../../../hooks/Review/useRegisterModalReview";
import PropTypes from "prop-types";

const ReviewModal = ({ body }) => {
  const { isOpen, onClose } = useRegisterModalReview();
  return (
    <ModalCustomScreen
      isOpen={isOpen}
      onClose={onClose}
      body={body}
      zIndex='z-[999]'
    />
  );
};

ReviewModal.propTypes = {
  body: PropTypes.node,
};

export default ReviewModal;
