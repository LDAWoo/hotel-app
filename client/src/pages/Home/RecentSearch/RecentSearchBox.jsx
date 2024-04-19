import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Title from "../../../components/Title/Title";

function RecentSearchBox({ item }) {
  return (
    <div className={`h-full w-full`}>
      <div className='rounded-lg w-full h-full shadow-[0_2px_8px_0_rgba(26,26,26,0.16)]'>
        <Link to={item?.to}>
          <div className='flex w-full items-center pl-4 pr-4 pt-2 pb-2 min-h-[100px] border-0 gap-2'>
            <div style={{ aspectRatio: "20/19" }}>
              <img
                src={item?.src}
                className='flex items-center rounded-lg min-h-full min-w-full object-cover'
              />
            </div>
            <div className='flex flex-col w-full'>
              <Title
                title={item?.location}
                className='dark:text-white'
                fontBold
                xl
              />
              <div className='flex items-center flex-grow w-full'>
                <Title
                  title={item?.content}
                  className='text-primary-100 dark:text-primary-50'
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
  item: PropTypes.object
};

export default RecentSearchBox;
