import PropTypes from "prop-types";
import ToolTipCustom from "../ToolTipCustom";
function RegisterToolTip({ width, component, render, userRegisterToolTip }) {
  const { isOpen, onClose } = userRegisterToolTip();

  return (
    <ToolTipCustom
      isOpen={isOpen}
      onClose={onClose}
      render={render}
      component={component}
      width={width}
    />
  );
}

RegisterToolTip.propTypes = {
  width: PropTypes.number,
  component: PropTypes.node,
  render: PropTypes.node,
  userRegisterToolTip: PropTypes.func.isRequired,
};

export default RegisterToolTip;
