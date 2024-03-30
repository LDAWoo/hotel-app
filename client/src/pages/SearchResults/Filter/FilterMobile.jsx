import { TbFilterEdit } from "react-icons/tb";
import Button from "../../../components/Buttons/Button";
import useRegisterModalFilter from "../../../hooks/useRegisterModalFilter";
import { useTranslation } from "react-i18next";

function FilterMobile() {
  const { onOpen } = useRegisterModalFilter();
  const {t} = useTranslation()
  return (
    <Button
      className='w-full text-hotel-50 hover:bg-hotel-25 pt-2 pb-2  justify-center'
      title={t("SearchResults.filters.title")}
      icon={TbFilterEdit}
      size={20}
      onClick={onOpen}
      xl
    />
  );
}

export default FilterMobile;
