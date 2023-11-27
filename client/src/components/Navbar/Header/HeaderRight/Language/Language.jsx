import i18next from "i18next";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import useRegisterModal from "../../../../../hooks/useRegisterModal";
import Button from "../../../../Buttons/Button";
import { Language as Languages } from "../../../../Constants/Language";
import ToolTip from "../../../../ToolTip/ToolTip";
function Language({ visible }) {
  const { onOpen } = useRegisterModal();
  const { t } = useTranslation();

  const handleChooseLanguage = () => {
    onOpen();
  };
  const currentLanguage = Languages.find(
    (lang) => lang?.code === i18next.language,
  );
  return (
    <div>
      <ToolTip
        typeToolTip='Tippy'
        delay={[500, 0]}
        placement='bottom'
        content={t("Modal.Language.title")}
      >
        <div
          className={`${
            visible ? "" : "hidden lg:flex"
          } items-center justify-center w-14 h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-200 `}
        >
          <Button
            className='w-full h-full'
            src={currentLanguage?.img || "/images/flagVietNam.png"}
            classImg='rounded-full object-cover w-5 w-5 sm:w-6 sm:h-6'
            onClick={handleChooseLanguage}
          />
        </div>
      </ToolTip>
    </div>
  );
}

Language.propTypes = {
  visible: PropTypes.bool,
};

export default Language;
