import PropTypes from "prop-types";

function TitleComponent({ src, icon, title }) {
  const IconComponent = icon;
  return (
    <div className='relative w-full'>
      <div className='flex items-center justify-start gap-2 w-full h-full'>
        {src && (
          <div className='flex items-center justify-center w-[44px] h-[44px]'>
            <img
              className='min-w-[44px] object-cover border-[2px] border-hotel-50 rounded-full'
              src={src}
            />
          </div>
        )}
        {icon && (
          <div className='text-hotel-50'>
            <IconComponent size={40} />
          </div>
        )}
        {title && (
          <div className='font-bold dark:text-primary-50 text-[16px] whitespace-nowrap text-ellipsis overflow-hidden'>
            {title}
          </div>
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
