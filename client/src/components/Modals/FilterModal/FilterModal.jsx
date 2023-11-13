import useRegisterModalFilter from "../../../hooks/useRegisterModalFilter";
import Filter from "../../../pages/SearchResults/Filter/Filter";
import Title from "../../Title/Title";
import RegisterToolTip from "../../ToolTip/RegisterToolTip/RegisterToolTip";
function FilterModal() {
  return (
    <>
      <RegisterToolTip
        render={<Filter />}
        component={<Title title='Filter' />}
        userRegisterToolTip={useRegisterModalFilter}
        zIndex='z-[1001]'
      />
    </>
  );
}

export default FilterModal;
