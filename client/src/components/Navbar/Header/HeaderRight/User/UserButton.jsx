import PropTypes from "prop-types";
import Button from "../../../../Buttons/Button";
import { useEffect, useState } from "react";

function UserButton({ title, src, icon, onClick }) {
  const [words, setWords] = useState("")
  
  useEffect(() => {
    if(title){
        const words = title.split(" ");
        const abbreviatedName = words[0].substring(0, 1);
        setWords(abbreviatedName)
    }
  },[title])

  return (
    <div className='flex items-center justify-center w-14 lg:w-full h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-200 '>
      <Button
        title={title}
        src={src}
        icon={icon}
        className='flex items-center justify-center w-full h-full '
        classTitle='w-full hidden lg:flex text-white font-medium'
        copy={
          !src && <div className="bg-secondary-50 w-[28px] h-[28px] rounded-full flex items-center justify-center text-[14px] font-bold">
              {words}
          </div>  
        }
        classImg={`${
          src
            ? "flex items-center translate-x-1 lg:translate-x-0 justify-center w-[28px] h-[28px] rounded-full border-[2px] border-hotel-50 object-cover"
            : ""
        }`}
        classIcon={`${
          icon
            ? "flex items-center text-primary-50 justify-center w-[28px] h-[28px] rounded-full border-[2px] border-hotel-50"
            : ""
        }`}
        xl
        srcPosition='before'
        onClick={onClick}
      />
    </div>
  );
}

UserButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.elementType,
  src: PropTypes.string,
  onClick: PropTypes.func,
};

export default UserButton;
