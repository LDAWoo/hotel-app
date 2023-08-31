import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function RecentSearchBox({ to, location, content, src, endScroll }) {
  return (
    <div
      className={`min-w-[calc((100%_-_2px)_/_1)] md:min-w-[calc((100%_-_14px)_/_2)] lg:min-w-[calc((100%_-_24px)_/_3)] ${
        endScroll ? "mr-0" : "mr-3"
      }`}
    >
      <div className='rounded-lg shadow-[0_2px_8px_0_rgba(26,26,26,0.16)] dark:shadow-[0_2px_8px_1px_rgba(200,200,200,0.16)] dark:bg-primary-600 p-[1px]'>
        <Link to={to}>
          <div className='flex items-center p-4 min-h-[100px] border-0'>
            <div className='min-w-[40px] mr-3'>
              <img
                src={src}
                className='flex items-center rounded-lg h-20 w-20'
              />
            </div>
            <div className='flex flex-col '>
              <span className='text-[16px] font-medium dark:text-white whitespace-nowrap overflow-hidden text-ellipsis'>
                {location}
              </span>
              <span className='text-[14px] font-normal text-primary-100 dark:text-primary-50'>
                {content}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
RecentSearchBox.propTypes = {
  to: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  endScroll: PropTypes.bool,
};

export default RecentSearchBox;
