import { MdLightMode } from "react-icons/md";
import Button from "../../../../Buttons/Button";
import ToolTip from "../../../../ToolTip/ToolTip";

function Theme() {
  return (
    <>
      <ToolTip delay={[500, 0]} placement='bottom' content='Theme'>
        <div className='flex items-center justify-center w-14 h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-100 '>
          <Button
            className='w-full h-full'
            classIcon='text-primary-50'
            size={24}
            icon={MdLightMode}
          />
        </div>
      </ToolTip>
    </>
  );
}

export default Theme;
