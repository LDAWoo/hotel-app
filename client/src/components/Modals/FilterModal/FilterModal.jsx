import { useTranslation } from "react-i18next";
import useRegisterModalFilter from "../../../hooks/useRegisterModalFilter";
import Filter from "../../../pages/SearchResults/Filter/Filter";
import Title from "../../Title/Title";
import RegisterToolTip from "../../ToolTip/RegisterToolTip/RegisterToolTip";
function FilterModal() {
  const {t} = useTranslation()
  return (
    <>
      <RegisterToolTip
        render={<Filter />}
        component={<Title title={t("SearchResults.filters.title")} />}
        userRegisterToolTip={useRegisterModalFilter}
        zIndex='z-[1001]'
      />
    </>
  );
}

export default FilterModal;
