import PropTypes from "prop-types";
import ButtonContinueHost from "./ButtonContinueHost";
import ButtonPrevHost from "./ButtonPrevHost";

const FooterHost = ({ onBack, onContinue }) => {
  return (
    <>
      <ButtonPrevHost onClick={onBack} />
      <ButtonContinueHost onClick={onContinue} />
    </>
  );
};

FooterHost.propTypes = {
  onBack: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};

export default FooterHost;
