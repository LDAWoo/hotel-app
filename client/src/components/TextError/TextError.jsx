import Icon from "../Icon/Icon";
import { IoIosClose } from "react-icons/io";
import PropTypes from 'prop-types'

function TextError({ icon, error }) {
  return (
    <>
      {error.length > 0 && (
        <div className='flex flex-row gap-1 items-center text-error-100 mt-[2px]'>
          {icon && <Icon icon={IoIosClose} size={18} />}
          <span className='text-[14px]'>{error}</span>
        </div>
      )}
    </>
  );
}

TextError.propTypes = {
  icon: PropTypes.bool,
  error: PropTypes.string
}

export default TextError;
