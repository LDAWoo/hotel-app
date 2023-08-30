import PropTypes from "prop-types";
function GuestButton({ icon, disable, onClick }) {
  const IconComponent = icon;
  return (
    <button
      onClick={onClick}
      type='button'
      className={`${
        disable
          ? "cursor-not-allowed "
          : "cursor-pointer hover:bg-gray-100 hover:dark:bg-primary-500 rounded-lg  duration-300"
      } flex items-center justify-center w-[40px] h-full`}
      tabIndex={-1}
      disabled={disable}
    >
      {IconComponent && (
        <div
          className={`${
            disable ? "text-gray-300 dark:text-primary-400" : "text-hotel-50"
          } bg-transparent`}
        >
          <IconComponent size={20} />
        </div>
      )}
    </button>
  );
}
GuestButton.propTypes = {
  icon: PropTypes.elementType,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
};

export default GuestButton;
