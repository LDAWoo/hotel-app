import PropTypes from "prop-types";
import Button from "../../../components/Buttons/Button";
function RecentSearchArrow({ icon, onClick, left, right }) {
  return (
    <Button
      className={`absolute z-[5] flex items-center justify-center bg-white shadow-[0_2px_8px_0_rgba(26,26,26,0.16)] dark:shadow-[0px_2px_8px_2px_rgba(200,200,200,0.16)] dark:bg-primary-600 border-[2px] border-transparent hover:border-hotel-50 hover:border-opacity-50 duration-200 rounded-full w-10 h-10 top-[35%] ${
        left && "-left-5"
      } ${right && "-right-7"}`}
      icon={icon}
      classIcon='translate-x-1 dark:text-white'
      size={20}
      onClick={onClick}
    />
  );
}
RecentSearchArrow.propTypes = {
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  left: PropTypes.bool,
  right: PropTypes.bool,
};
export default RecentSearchArrow;
