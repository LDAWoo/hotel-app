import PropTypes from "prop-types";
import Title from "../Title/Title";
import Icon from "../Icon/Icon";

function TitleComponent({ src, icon, title }) {
  return (
    <div className='relative w-full'>
      <div className='flex items-center justify-start gap-2 w-full h-full'>
        {src && (
          <div className='flex items-center justify-center w-[28px] h-[28px] sm:w-[44px] sm:h-[44px]'>
            <img
              className='min-w-[28px] sm:min-w-[44px] object-cover border-[2px] border-hotel-50 rounded-full'
              src={src}
            />
          </div>
        )}
        {icon && (
          <div className='text-hotel-50'>
            <Icon icon={icon} customSize={28} size={40} />
          </div>
        )}
        {title && (
          <Title title={title} xl fontMedium colorTitle='dark:text-white' />
        )}
      </div>
    </div>
  );
}

TitleComponent.propTypes = {
  src: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
};

export default TitleComponent;
