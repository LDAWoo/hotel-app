import PropTypes from "prop-types";
import Title from "../../../components/Title/Title";

function FilterCard({ title, subTitle, componentDiff, item = [] }) {
  return (
    <div className='w-full p-2 border-b-[1px] dark:border-primary-500'>
      <div className='flex flex-col w-full dark:text-white'>
        {title && <Title title={title} className='mb-2' large fontBold />}
        {subTitle && (
          <Title
            title={subTitle}
            large
            className='text-primary-100 dark:text-primary-50'
          />
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
