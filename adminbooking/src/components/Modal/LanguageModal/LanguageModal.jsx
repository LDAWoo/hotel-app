// import { useTranslation } from "react-i18next";
import Modals from "../Modals";
import useRegisterModalLanguage from "../../../hooks/useRegisterModalLanguage";
import Body from "./Body";

function LanguageModal() {
  const { isOpen, onClose } = useRegisterModalLanguage();
  // const { t } = useTranslation();
  return (
    <Modals
      isOpen={isOpen}
      // title={t("Modal.Language.title")}
      onClose={onClose}
      body={<Body />}
      hAuto
    />
  );
}

export default LanguageModal;
