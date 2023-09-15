import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Title from "../../../components/Title/Title";
function RecentSearchBox({ to, location, content, src, endScroll }) {
  return (
    <div
      className={`min-w-[calc((100%_-_2px)_/_1)] md:min-w-[calc((100%_-_14px)_/_2)] lg:min-w-[calc((100%_-_24px)_/_3)] ${
        endScroll ? "mr-0" : "mr-3"
      }`}
    >
      <div className='rounded-lg w-full shadow-[0_2px_8px_0_rgba(26,26,26,0.16)] dark:shadow-[0_2px_8px_1px_rgba(200,200,200,0.16)] dark:bg-primary-600 p-[1px]'>
        <Link to={to}>
          <div className='flex w-full items-center pl-4 pr-4 pt-2 pb-2 min-h-[100px] border-0 gap-2'>
            <div style={{ aspectRatio: "20/19" }}>
              <img
                src={src}
                className='flex items-center rounded-lg min-h-full min-w-full object-cover'
              />
            </div>
            <div className='flex flex-col w-full'>
              <Title
                title={location}
                colorTitle='dark:text-white'
                fontBold
                xl
              />
              <div className='flex items-center flex-grow w-full'>
                <Title
                  title={content}
                  colorTitle='text-primary-100 dark:text-primary-50'
                  large
                />
              </div>
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
