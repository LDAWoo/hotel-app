import { useNavigate } from "react-router-dom";
import ComponentHost from "../ComponentHost";
import ComponentCategoryHost from "./ComponentCategoryHost";

const CategoryHost = () => {
  const navigate = useNavigate();

  const handleChooseCategory = (keys) => {
    navigate("/join/become-a-host/" + keys);
  };

  return (
    <ComponentHost
      title='List your property on Booking.com and start welcoming guests in no time!'
      subTitle='To get started, choose the type of property you want to list on Staying.com'
      classComponent
      classComponentLeft
      componentLeft={<ComponentCategoryHost onClick={handleChooseCategory} />}
    />
  );
};

export default CategoryHost;
