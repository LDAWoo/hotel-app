import { useNavigate } from "react-router-dom";
import Button from "../../../../Buttons/Button";
import routesConfig from "../../../../../configs/routesConfig";
function ListYourProperty() {
  const navigate = useNavigate();
  const handleClickJoinStaying = () => {
    navigate(routesConfig.join);
  };
  return (
    <Button
      title='List your property'
      className='text-white hidden lg:flex items-center justify-center w-auto h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-200 '
      fontMedium
      xxl
      onClick={handleClickJoinStaying}
    />
  );
}

export default ListYourProperty;
