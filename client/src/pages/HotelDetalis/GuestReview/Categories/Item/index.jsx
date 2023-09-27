import Title from "../../../../../components/Title/Title";

const Item = ({ title, rating }) => {
  const maxRating = 5;
  const width = (rating / maxRating) * 100;

  return (
    <div className='flex flex-col'>
      <div className='flex items-center flex-row dark:text-white'>
        <div className='flex-1'>
          <Title title={title} fontMedium large />
        </div>
        <Title title={rating} fontMedium large />
      </div>

      {/* Progress */}
      <div className='relative w-full bg-gray-300 dark:bg-hotel-25 h-[8px] rounded-full'>
        <span
          className={`absolute left-0 rounded-full bg-hotel-600 dark:bg-hotel-100 h-full`}
          style={{ width: `${width}%` }}
        ></span>
      </div>
    </div>
  );
};

export default Item;
