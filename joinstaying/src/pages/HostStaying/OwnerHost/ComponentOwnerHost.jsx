import { OwnerHostData } from "../../../components/Constants/OwnerHostData";
import Title from "../../../components/Title/Title";
import TextInput from "../../../components/TextInput/TextInput";
import ItemHost from "../ItemHost";
import PropTypes from "prop-types";
import useRegisterOwner from "../../../hooks/JoinStaying/OwnerHost/useRegisterOwner";

function ComponentOwnerHost() {
  const { quantityHotel, setQuantityHotel, activeHotel, setActiveHotel } = useRegisterOwner();

  const handleActive = (name, value) => {
    if (activeHotel === name) return;
    setActiveHotel(name);
    setQuantityHotel(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value < 2) return;
    setQuantityHotel(value);
  };
  return (
    <div className="w-full grid grid-cols-1 gap-5 p-4 bg-white dark:bg-primary-700">
      {OwnerHostData.map((item, index) => (
        <div key={index}>
          <ItemHost description={item?.name} img={item?.image} active={activeHotel === item?.name} className="aspect-auto" onClick={() => handleActive(item?.name, item?.value)} />
          {item?.value > 1 && activeHotel === item?.name && (
            <div className="flex flex-col gap-2 mt-4">
              <Title title="Number of property" xl />
              <TextInput type="number" onChange={handleChange} value={quantityHotel} min={item?.value} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

ComponentOwnerHost.propTypes = {
  isNumberOfProperty: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ComponentOwnerHost;
