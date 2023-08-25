import useRegisterModal from "../../../../../hooks/useRegisterModal";
import Button from "../../../../Buttons/Button";
import ToolTip from "../../../../ToolTip/ToolTip";

function Language() {
  const { onOpen } = useRegisterModal();

  const handleChooseLanguage = () => {
    onOpen();
  };

  return (
    <>
      <ToolTip delay={[500, 0]} placement='bottom' content='Chon ngon ngu cua ban'>
        <div className='flex items-center justify-center w-14 h-14 mt-2 mr-2 rounded-md bg-transparent hover:bg-hotel-100 '>
          <Button
            className='w-full h-full'
            src='/images/flagVietNam.png'
            classImg='rounded-full object-cover w-6 h-6'
            onClick={handleChooseLanguage}
          />
        </div>
      </ToolTip>
    </>
  );
}

export default Language;
