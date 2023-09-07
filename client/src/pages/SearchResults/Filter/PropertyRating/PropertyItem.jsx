import Checkbox from "../../../../components/Checkbox/Checkbox";
import { ratings } from "../../../../components/Constants/Ratings";
import useRegisterPropertyRatingStore from "../../../../hooks/Filter/useRegisterPropertyratingStore";
function PropertyItem() {
  const { checkedItems, setCheckedItems } = useRegisterPropertyRatingStore();

  const handleChange = (name, checked) => {
    setCheckedItems(name, checked);
  };

  return (
    <>
      {ratings.map((item, index) => (
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

export default PropertyItem;
