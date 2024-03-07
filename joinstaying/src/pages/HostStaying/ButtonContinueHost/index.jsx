import PropTypes from "prop-types";
import Button from "../../../components/Buttons/Button";
import { useTranslation } from "react-i18next";

function ButtonContinueHost({ onClick, disabled }) {
  const { t } = useTranslation();
  return <Button title={t("HostStaying.buttonContinue")} background disabled={disabled} className="w-full justify-center pt-2 pb-2" onClick={onClick} />;
}
ButtonContinueHost.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ButtonContinueHost;
