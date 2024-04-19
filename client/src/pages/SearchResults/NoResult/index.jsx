import PropType from "prop-types";
import { GoSearch } from "react-icons/go";
import Icon from "../../../components/Icon/Icon";
import Title from "../../../components/Title/Title";
import { useTranslation } from "react-i18next";

function NoResult({ searchResult }) {
  const { t } = useTranslation();
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center gap-4 w-full p-1'>
        <Icon icon={GoSearch} size={28} classIcon='dark:text-white' />
        <Title
          title={`${t("Error.SearchResults.notHotel")} ${searchResult}`}
          fontBold
          extraLarge8
          className='dark:text-white w-full text-center'
          nowrap={false}
        />

        <Title
          className='dark:text-primary-50 w-full text-center'
          title={t("Error.SearchResults.hotHotelAndUpdate")}
          xxl
          nowrap={false}
        />
{/* 
        <div>
          <Button
            title={t("Error.SearchResults.updateSearch")}
            background
            className='justify-center p-2'
          />
        </div> */}
      </div>
    </div>
  );
}

NoResult.propTypes = {
  searchResult: PropType.string,
};

export default NoResult;
