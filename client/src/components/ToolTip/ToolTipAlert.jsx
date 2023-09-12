import PropTypes from "prop-types";

function ToolTipAlert({ isOpen, content }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='absolute z-50 inset-auto -translate-y-1 translate-x-2'>
      {content && (
        <div className='before:absolute before:border-b-[5px] before:border-[#d4111e] bo before:w-0 before:h-0 before:border-l-[5px] before:border-l-transparent before:border-r-[5px] before:border-r-transparent before:left-[14px] before:bottom-[100%]'>
          <div className='bg-[#d4111e] p-1 rounded-md'>
            <span className='text-white whitespace-nowrap text-[14px]'>
              {content}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
ToolTipAlert.propTypes = {
  isOpen: PropTypes.bool,
  content: PropTypes.string,
};
export default ToolTipAlert;
