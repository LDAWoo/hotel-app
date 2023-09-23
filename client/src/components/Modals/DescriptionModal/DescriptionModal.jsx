import PropTypes from "prop-types";
import Modals from "../Modals";
import useRegisterModalDescription from "../../../hooks/Description/useRegisterModalDescription";
import Body from "../../../pages/HotelDetalis/DescriptionHighlight/Description/Description/Body";

function DescriptionModal({ data }) {
  const { isOpen, onClose } = useRegisterModalDescription();
  return (
    <Modals
      isOpen={isOpen}
      body={<Body data={data} maxSegments={data.length - 1} />}
      onClose={onClose}
      title='Description'
      hAuto
    />
  );
}

DescriptionModal.propTypes = {
  data: PropTypes.string,
};

export default DescriptionModal;
