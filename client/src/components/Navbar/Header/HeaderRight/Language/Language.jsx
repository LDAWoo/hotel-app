import i18next from "i18next";
import { useTranslation } from "react-i18next";
import useRegisterModal from "../../../../../hooks/useRegisterModal";
import Button from "../../../../Buttons/Button";
import { Language as Languages } from "../../../../Constants/Language";
import ToolTip from "../../../../ToolTip/ToolTip";
function Language() {
  const { onOpen } = useRegisterModal();
  const { t } = useTranslation();

  const handleChooseLanguage = () => {
    onOpen();
  };
  const currentLanguage = Languages.find(
    (lang) => lang.code === i18next.language,
  );

  return (
    <>
      <ToolTip
        typeToolTip='Tippy'
        delay={[500, 0]}
        placement='bottom'
        content={t("Modal.Language.title")}
      >
        <div className='flex items-center justify-center w-14 h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-100 '>
          <Button
            className='w-full h-full'
            src={currentLanguage.img}
            classImg='rounded-full object-cover w-6 h-6'
            onClick={handleChooseLanguage}
          />
        </div>
      </ToolTip>
    </>
  );
}

export default Language;
