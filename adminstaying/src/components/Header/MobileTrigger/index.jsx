import useRegisterMobileTrigger from "../../../hooks/Header/useRegisterMobileTrigger";
import Button from "../../Buttons/Button";
import { IoIosMenu } from "react-icons/io";
const MobileTrigger = () => {
  const { onOpen } = useRegisterMobileTrigger();

  const handleClickTrigger = () => {
    onOpen();
  };
  return (
    <div className="flex 2md:hidden">
      <Button icon={IoIosMenu} size={30} className="text-white" onClick={handleClickTrigger} />
    </div>
  );
};

export default MobileTrigger;
