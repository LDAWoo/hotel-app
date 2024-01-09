import PropTypes from "prop-types";
import Button from "../../../components/Buttons/Button";

function ButtonContinueHost({ onClick, disabled }) {
  return (
    <Button
      title='Continue'
      background
      disabled={disabled}
      className='w-full justify-center pt-2 pb-2'
      onClick={onClick}
    />
  );
}
ButtonContinueHost.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ButtonContinueHost;
