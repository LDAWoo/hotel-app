import { useTranslation } from "react-i18next";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import TextInput from "../../../components/TextInput/TextInput";
import useRegisterLocationStore from "../../../hooks/useRegisterLocationStore";

function LocationSearch() {
  const { t } = useTranslation();
  const { valueLocation, setValueLocation } = useRegisterLocationStore();

  const handleChangeLocation = (e) => {
    setValueLocation(e.target.value);
  };

  const handleClearValue = () => {
    setValueLocation("");
  };

  return (
    <div className='w-full bg-transparent'>
      <div className='border-t-[2px] border-b-[2px] dark:border-primary-500 w-full h-8'>
        <TextInput
          type='text'
          icon={AiOutlineSearch}
          sizeIcon={20}
          placeholder={t("Search.location")}
          classBorder='rounded-0'
          classInput={`absolute bg-transparent pl-8 ${
            valueLocation?.length > 0 ? "pr-8" : "pr-0"
          } rounded-lg w-full h-auto pt-1 pb-1 placeholder:dark:text-primary-50 dark:text-primary-50 placeholder:text-[14px] text-[14px]`}
          classIcon='absolute dark:text-primary-50 text-primary-50 top-1 left-1'
          value={valueLocation}
          onChange={handleChangeLocation}
          copy={valueLocation?.length > 0}
          iconCopy={AiOutlineClose}
          classCopy='absolute top-1 right-1 dark:text-primary-50 text-primary-50'
          sizeIconCopy={18}
          onClickCopy={handleClearValue}
        />
      </div>
    </div>
  );
}

export default LocationSearch;
