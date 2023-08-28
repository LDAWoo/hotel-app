import useRegisterToolTipUser from "../../../../../hooks/useRegisterToolTipUser";
import Button from "../../../../Buttons/Button";
import PropTypes from "prop-types";

function UserButton({ user }) {
  const { isOpen, onOpen, onClose } = useRegisterToolTipUser();

  const handleShowMenuUser = () => {
    if (isOpen) {
      onClose();
      return;
    }
    onOpen();
  };

  return (
    <div className='flex items-center justify-center w-14 lg:w-full h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-100 '>
      <Button
        title={user?.name}
        src={user?.picture}
        className='flex items-center justify-center w-full h-full'
        classTitle='w-full hidden lg:flex text-white font-medium '
        classImg='flex items-center translate-x-1 lg:translate-x-0 justify-center w-[28px] h-[28px] rounded-full border-[2px] border-hotel-50 object-cover'
        srcPosition='before'
        onClick={handleShowMenuUser}
      />
    </div>
  );
}

UserButton.propTypes = {
  user: PropTypes.object,
};

export default UserButton;
