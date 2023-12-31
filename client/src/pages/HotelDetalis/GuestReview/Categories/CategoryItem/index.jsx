import PropTypes from "prop-types";
import Title from "../../../../../components/Title/Title";

const CategoryItem = ({ title, rating }) => {
  const maxRating = 5;
  const width = (rating / maxRating) * 100;

  return (
    <div className='flex flex-col'>
      <div className='flex items-center flex-row dark:text-white'>
        <div className='flex-1'>
          <Title title={title} fontMedium xl />
        </div>
        <Title title={rating} fontMedium xl />
      </div>

      {/* Progress */}
      <div className='relative w-full bg-gray-300 dark:bg-hotel-25/20 h-[8px] rounded-full'>
        <span
          className={`absolute left-0 rounded-full bg-hotel-600 dark:bg-hotel-100 h-full`}
          style={{ width: `${width}%` }}
        ></span>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default CategoryItem;
