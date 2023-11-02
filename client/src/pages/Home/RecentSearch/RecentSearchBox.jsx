import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Title from "../../../components/Title/Title";
function RecentSearchBox({ to, location, content, src }) {
  return (
    <div className={`h-full w-full`}>
      <div className='rounded-lg w-full h-full dark:bg-primary-700 border dark:border-primary-500'>
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
