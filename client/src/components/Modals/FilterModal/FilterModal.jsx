import useRegisterModalFilter from "../../../hooks/useRegisterModalFilter";
import Filter from "../../../pages/SearchResults/Filter/Filter";
import Modals from "../Modals";
function FilterModal() {
  const { isOpen, onClose } = useRegisterModalFilter();
  return (
    <Modals
      isOpen={isOpen}
      onClose={onClose}
      title='Filter'
      body={<Filter />}
    ></Modals>
  );
}

export default FilterModal;
