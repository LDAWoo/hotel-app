import { useTranslation } from "react-i18next";
import Modals from "../Modals";
import useRegisterModal from "../../../hooks/useRegisterModal";
import Body from "./Body";

function LanguageModal() {
  const { isOpen, onClose } = useRegisterModal();
  const { t } = useTranslation();
  return (
    <Modals
      isOpen={isOpen}
      title={t("Modal.Language.title")}
      onClose={onClose}
      body={<Body />}
    ></Modals>
  );
}

export default LanguageModal;
