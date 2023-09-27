import Button from "../../../../components/Buttons/Button";

const ShowAllReview = () => {
  return (
    <div className='flex flex-row w-full mt-5'>
      <Button
        title='Show all reviews'
        className='border border-hotel-200 hover:bg-hotel-25 duration-300 pt-1 pb-1 pr-2 pl-2 rounded-sm items-center flex justify-center w-full sm:w-auto'
        fontMedium
        large
        classTitle='text-hotel-200'
      />
    </div>
  );
};

export default ShowAllReview;
