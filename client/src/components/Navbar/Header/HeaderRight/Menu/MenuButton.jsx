import PropTypes from "prop-types";
import Button from "../../../../Buttons/Button";
function MenuButton({ title, src, size = 18, icon, onClick }) {
  return (
    <Button
      className='w-full h-full hover:bg-gray-200/50 dark:hover:bg-primary-500 p-[7px] translate duration-300'
      title={title}
      classTitle='text-primary-700 dark:text-white'
      classImg='rounded-full object-cover w-5 h-5 sm:w-6 sm:h-6'
      classIcon='text-primary-600 dark:text-white'
      srcPosition='before'
      titlePosition='right'
      {...(src ? { src } : {})}
      {...(icon ? { icon } : {})}
      size={size}
      xl
      iconPosition='before'
      onClick={onClick}
    />
  );
}
MenuButton.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  icon: PropTypes.elementType,
  size: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
