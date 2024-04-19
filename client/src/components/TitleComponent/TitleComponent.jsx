import PropTypes from "prop-types";
import Title from "../Title/Title";
import Icon from "../Icon/Icon";
import { useEffect, useState } from "react";

function TitleComponent({ src, icon, title,type }) {

  const [words, setWords] = useState("")
  
  useEffect(() => {
    if(title){
        const words = title.split(" ");
        const abbreviatedName = words[0].substring(0, 1);
        setWords(abbreviatedName)
    }
  },[title])

  return (
    <div className='relative w-full'>
      <div className='flex items-center justify-start gap-2 w-full h-full'>
          {type === "image" && <div className='flex items-center justify-center w-[28px] h-[28px] sm:w-[44px] sm:h-[44px]'>
          {src ? (
            <img
              className='min-w-[28px] sm:min-w-[44px] object-cover border-[2px] border-hotel-50 rounded-full'
              src={src}
            />
          ) : <div className="bg-secondary-50 w-full h-full rounded-full overflow-hidden flex items-center justify-center font-bold text-[14px]">
                {words}
            </div>}
          </div>}
        {icon && (
          <div className='text-hotel-50'>
            <Icon icon={icon} size={28} />
          </div>
        )}
        {title && (
          <Title title={title} xxxl fontMedium className='dark:text-white' />
        )}
      </div>
    </div>
  );
}

TitleComponent.propTypes = {
  src: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default TitleComponent;
