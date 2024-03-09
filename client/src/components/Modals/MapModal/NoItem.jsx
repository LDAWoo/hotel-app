import Icon from "../../Icon/Icon";
import { SiMediamarkt } from "react-icons/si";
import Title from "../../Title/Title";
import Button from "../../Buttons/Button";
import { useTranslation } from "react-i18next";
const NoItem = () => {
  const { t } = useTranslation();

  const handleReloadResults = () => {
    window.onload();
  };
  return (
    <div className='flex flex-col gap-4 items-center mt-4 p-4'>
      <Icon
        icon={SiMediamarkt}
        size={34}
        classIcon='animate-spin text-hotel-50 '
      />
      <Title
        title={t("Error.SearchResults.noResults")}
        fontBold
        extraLarge4
        nowrap={false}
        className='text-hotel-50 text-center'
      />

      <div>
        <Button
          title={t("Error.SearchResults.reloadResults")}
          background
          className='p-2 rounded-sm'
          onClick={handleReloadResults}
        />
      </div>
    </div>
  );
};

export default NoItem;
