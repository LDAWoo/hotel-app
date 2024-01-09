import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { BsCheck2 } from "react-icons/bs";
import useRegisterModal from "../../../hooks/useRegisterModal";
import Button from "../../Buttons/Button";
import { Language } from "../../Constants/Language";
import { useEffect } from "react";
import Title from "../../Title/Title";

function Body() {
  const { t } = useTranslation();
  const { onClose } = useRegisterModal();
  const currentLanguage = i18next.language;
  const LanguageChoose = Language.find((lang) => lang?.code === currentLanguage);

  const sortLanguage = LanguageChoose ? [LanguageChoose, ...Language.filter((lang) => lang?.code !== currentLanguage)] : Language;

  const handleChangeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    onClose();
  };

  useEffect(() => {
    if (!i18next.language) {
      i18next.changeLanguage("en-EN");
    }
  }, []);

  return (
    <div className="flex items-center w-full">
      <div className="flex flex-col w-full items-center">
        <div className="flex items-center w-full justify-start   ">
          <Title title={t("Modal.Language.allLanguage")} xl fontMedium colorTitle="dark:text-white" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-1">
          {sortLanguage.map((lang) => (
            <div key={lang.id} className={`flex items-center justify-start w-full rounded-md ${lang.code === currentLanguage ? "bg-gray-100 dark:bg-primary-500" : "hover:bg-gray-100 dark:hover:bg-primary-500"}`}>
              <Button
                className="w-full h-full pt-3 pb-3 pr-3 pl-3"
                active={lang?.code === currentLanguage}
                src={lang?.img}
                title={lang?.title}
                classButton="justify-between flex-1"
                classTitle={`${lang?.code === currentLanguage ? "text-hotel-50" : "dark:text-white"}`}
                classImg="rounded-full object-cover w-5 h-5 sm:w-6 sm:h-6"
                icon={BsCheck2}
                srcPosition="before"
                titlePosition="before"
                iconPosition="right"
                classIcon="text-hotel-50"
                size={22}
                titleCustom="text-[14px] sm:text-[15px]"
                onClick={() => handleChangeLanguage(lang.code)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
