import { MdLocationOn } from "react-icons/md";
import Button from "../../../components/Buttons/Button";
import useRegisterModalMap from "../../../hooks/useRegisterModalMap";
import { useTranslation } from "react-i18next";

function Map() {
  const { onOpen } = useRegisterModalMap();
  const { t } = useTranslation();
  const handleShowMap = () => {
    onOpen();
  };
  return (
    <div className='relative w-full mb-2'>
      <div className='relative rounded-lg h-[72px] min-h-[150px] bg-[url("/images/map.png")]'>
        <div className='pt-[30px] flex justify-center'>
          <div className='text-hotel-100 hover:text-hotel-200 hover:scale-125 duration-300'>
            <MdLocationOn size={48} />
          </div>
        </div>
        <div className='pt-3 flex justify-center w-full'>
          <Button
            className='p-[6px] text-white text-[14px] font-medium whitespace-nowrap bg-hotel-50 hover:bg-hotel-100 rounded-md'
            title={t("SearchResults.showOnMap")}
            onClick={handleShowMap}
          />
        </div>
      </div>
    </div>
  );
}

export default Map;
