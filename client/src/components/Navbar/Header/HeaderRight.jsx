import { MdLightMode } from "react-icons/md";
import Button from "../../Buttons/Button";
import ToolTip from "../../ToolTip/ToolTip";

function HeaderRight() {
  return (
    <div className='flex'>
      <ToolTip delay={[500, 0]} placement='bottom' content='Chon ngon ngu cua ban'>
        <div className='flex items-center justify-center w-10 h-10 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-100 '>
          <Button
            className='w-full h-full'
            src='/images/flagVietNam.png'
            classImg='rounded-full object-cover w-6 h-6'
          />
        </div>
      </ToolTip>

      <ToolTip delay={[500, 0]} placement='bottom' content='Theme'>
        <div className='flex items-center justify-center w-10 h-10 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-100 '>
          <Button
            className='w-full h-full'
            classIcon='text-primary-50'
            size={24}
            icon={MdLightMode}
          />
        </div>
      </ToolTip>
    </div>
  );
}

export default HeaderRight;
