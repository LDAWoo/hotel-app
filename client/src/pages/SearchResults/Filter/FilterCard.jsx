import PropTypes from "prop-types";

function FilterCard({ title, subTitle, componentDiff, item = [] }) {
  return (
    <div className='w-full p-2 border-b-[1px] dark:border-primary-500'>
      <div className='flex flex-col w-full dark:text-white'>
        {title && <div className='font-bold text-[14px] mb-2'>{title}</div>}
        {subTitle && (
          <div className='text-[12px] text-primary-100 dark:text-primary-50'>
            {subTitle}
          </div>
        )}
        {componentDiff && <>{componentDiff}</>}
        {item && item.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </div>
  );
}

FilterCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  componentDiff: PropTypes.element,
  item: PropTypes.arrayOf(PropTypes.node),
};

export default FilterCard;
