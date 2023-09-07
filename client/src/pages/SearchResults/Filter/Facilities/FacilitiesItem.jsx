import Checkbox from "../../../../components/Checkbox/Checkbox";
import { facilities } from "../../../../components/Constants/Facilities";
import useRegisterFacilitiesStore from "../../../../hooks/Filter/useRegisterFacilitiesStore";

function FacilitiesItems() {
  const { checkedItems, setCheckedItems } = useRegisterFacilitiesStore();
  const handleChange = (name, checked) => {
    setCheckedItems(name, checked);
  };

  return (
    <>
      {facilities.map((item, index) => (
        <Checkbox
          key={index}
          title={item?.title}
          value={item?.value}
          name={item?.value}
          checked={checkedItems[item?.value] || false}
          onChange={handleChange}
        />
      ))}
    </>
  );
}

export default FacilitiesItems;
