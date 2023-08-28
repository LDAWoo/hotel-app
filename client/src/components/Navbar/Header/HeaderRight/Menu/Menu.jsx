import { AiOutlineMenu } from "react-icons/ai";
import Button from "../../../../Buttons/Button";

function Menu() {
  return (
    <div>
      <div className='flex lg:hidden items-center justify-center w-14 h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-100 '>
        <Button
          className='w-full h-full translate-x-1'
          icon={AiOutlineMenu}
          classIcon='text-gray-300'
          size={24}
        />
      </div>
    </div>
  );
}

export default Menu;
