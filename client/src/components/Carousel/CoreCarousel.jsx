import PropTypes from "prop-types";
function CoreCarousel({ data, component }) {
  const Component = component;
  return (
    <div className='bg-transparent pl-2 pr-2 pb-3 pt-3 border-[1px] dark:border-primary-500 rounded-lg'>
      <ul
        className='flex flex-nowrap list-none m-0 justify-start box-border w-full overflow-x-scroll scroll-smooth no-scrollbar'
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className='box-border whitespace-normal mr-3 flex-shrink-0 flex-grow-0 basis-auto w-[42%] h-[50%]'
          >
            {Component && <Component item={item} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
CoreCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  component: PropTypes.func,
};

export default CoreCarousel;
