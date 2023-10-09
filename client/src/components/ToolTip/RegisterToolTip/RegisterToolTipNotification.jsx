import ToolTipNotification from "../ToolTipNotification";
import PropTypes from "prop-types";

function RegisterToolTipNotification({
  className,
  icon,
  header,
  render,
  useRegisterToolTip,
}) {
  const { isOpen, onClose } = useRegisterToolTip();
  return (
    <ToolTipNotification
      className={className}
      icon={icon}
      header={header}
      render={render}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}

RegisterToolTipNotification.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node.isRequired,
  header: PropTypes.node,
  useRegisterToolTip: PropTypes.func,
  render: PropTypes.node,
};

export default RegisterToolTipNotification;
