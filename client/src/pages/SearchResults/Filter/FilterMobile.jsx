import { TbFilterEdit } from "react-icons/tb";
import Button from "../../../components/Buttons/Button";
import useRegisterModalFilter from "../../../hooks/useRegisterModalFilter";

function FilterMobile() {
  const { onOpen } = useRegisterModalFilter();

  return (
    <Button
      className='w-full text-hotel-50 hover:bg-hotel-25 pt-2 pb-2  justify-center'
      title='Filter'
      icon={TbFilterEdit}
      size={20}
      onClick={onOpen}
      xl
    />
  );
}

export default FilterMobile;
