import Button from "../../../../components/Buttons/Button";
import useRegisterModalReview from "../../../../hooks/Review/useRegisterModalReview";

const ShowAllReview = () => {
  const { onOpen } = useRegisterModalReview();

  const handleShowModalReview = () => {
    onOpen();
  };
  return (
    <div className='flex flex-row w-full mt-5'>
      <Button
        title='Show all reviews'
        className='border border-hotel-100 hover:bg-hotel-25 duration-300 pt-1 pb-1 pr-2 pl-2 rounded-sm items-center flex justify-center w-full sm:w-auto'
        fontMedium
        large
        classTitle='text-hotel-100'
        onClick={handleShowModalReview}
      />
    </div>
  );
};

export default ShowAllReview;
