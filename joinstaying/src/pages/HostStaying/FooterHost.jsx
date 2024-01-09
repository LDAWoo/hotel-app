import PropTypes from "prop-types";
import ButtonContinueHost from "./ButtonContinueHost";
import ButtonPrevHost from "./ButtonPrevHost";

const FooterHost = ({ disabled, onBack, onContinue }) => {
  return (
    <>
      <ButtonPrevHost onClick={onBack} />
      <ButtonContinueHost disabled={disabled} onClick={onContinue} />
    </>
  );
};

FooterHost.propTypes = {
  disabled: PropTypes.bool,
  onBack: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};

export default FooterHost;
