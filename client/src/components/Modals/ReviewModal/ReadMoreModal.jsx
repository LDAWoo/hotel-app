import Modals from "../Modals";
import PropTypes from "prop-types";
import useRegisterModalReadMoreReview from "../../../hooks/Review/useRegisterModalReadMoreReview";
const ReadMoreModal = ({ body }) => {
  const { isOpen, onClose } = useRegisterModalReadMoreReview();
  return (
    <Modals
      isOpen={isOpen}
      onClose={onClose}
      body={body}
      zIndex='z-[999]'
      hAuto
    />
  );
};

ReadMoreModal.propTypes = {
  body: PropTypes.node,
};

export default ReadMoreModal;
