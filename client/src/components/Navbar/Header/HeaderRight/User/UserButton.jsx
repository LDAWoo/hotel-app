import PropTypes from "prop-types";
import Button from "../../../../Buttons/Button";

function UserButton({ title, src, icon, onClick }) {
  return (
    <div className='flex items-center justify-center w-14 lg:w-full h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-100 '>
      <Button
        title={title}
        src={src}
        icon={icon}
        className='flex items-center justify-center w-full h-full'
        classTitle='w-full hidden lg:flex text-white font-medium '
        classImg={`${
          src
            ? "flex items-center translate-x-1 lg:translate-x-0 justify-center w-[28px] h-[28px] rounded-full border-[2px] border-hotel-50 object-cover"
            : ""
        }`}
        classIcon={`${
          icon
            ? "flex items-center text-primary-50 justify-center w-[28px] h-[28px] rounded-full border-[2px] border-hotel-50"
            : ""
        }`}
        xl
        srcPosition='before'
        onClick={onClick}
      />
    </div>
  );
}

UserButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.elementType,
  src: PropTypes.string,
  onClick: PropTypes.func,
};

export default UserButton;
