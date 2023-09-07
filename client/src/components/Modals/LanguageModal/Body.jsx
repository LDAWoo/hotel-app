import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { BsCheck2 } from "react-icons/bs";
import useRegisterModal from "../../../hooks/useRegisterModal";
import Button from "../../Buttons/Button";
import { Language } from "../../Constants/Language";

function Body() {
  console.log("start");
  const { t } = useTranslation();
  const { onClose } = useRegisterModal();
  const currentLanguage = i18next.language;
  const LanguageChoose = Language.find(
    (lang) => lang?.code === currentLanguage,
  );

  const sortLanguage = LanguageChoose
    ? [
        LanguageChoose,
        ...Language.filter((lang) => lang?.code !== currentLanguage),
      ]
    : Language;

  console.log(sortLanguage);
  const handleChangeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    onClose();
  };

  console.log("end");
  return (
    <div className='flex items-center w-full'>
      <div className='flex flex-col w-full items-center'>
        <div className='flex items-center w-full justify-start dark:text-white font-medium '>
          {t("Modal.Language.allLanguage")}
        </div>
        <div className='flex items-center justify-start w-full flex-wrap'>
          {sortLanguage.map((lang) => (
            <div
              key={lang.id}
              className={`flex flex-1 flex-shrink basis-0 items-center justify-start 
                min-w-[180px] 
                sm:min-w-[200px]
                sm:max-w-[304px]
                lg:max-w-[217px]
                h-12 mt-2 mr-2 rounded-md ${
                  lang.code === currentLanguage
                    ? "bg-gray-100 dark:bg-primary-500"
                    : "hover:bg-gray-100 dark:hover:bg-primary-500"
                }`}
            >
              <Button
                className='w-full h-full'
                active={lang?.code === currentLanguage}
                src={lang?.img}
                title={lang?.title}
                classTitle={`${
                  lang?.code === currentLanguage
                    ? "text-hotel-50"
                    : "dark:text-white"
                }`}
                classImg='rounded-full object-cover w-6 h-6'
                icon={BsCheck2}
                srcPosition='before'
                titlePosition='before'
                iconPosition='right'
                classIcon='text-hotel-50'
                size={20}
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
