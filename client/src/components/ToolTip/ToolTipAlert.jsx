import PropTypes from "prop-types";
import Title from "../Title/Title";

function ToolTipAlert({ isOpen, content }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='absolute z-50 inset-auto translate-y-2 -translate-x-[10px] sm:-translate-x-2'>
      {content && (
        <div className='before:absolute before:border-b-[5px] before:border-[#d4111e]  before:w-0 before:h-0 before:border-l-[5px] before:border-l-transparent before:border-r-[5px] before:border-r-transparent before:left-[14px] before:bottom-[100%]'>
          <div className='bg-[#d4111e] p-1 rounded-md'>
            <Title title={content} className='text-white' large />
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
