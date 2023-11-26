import useRegisterHotelDetails from "../../../../hooks/HotelDetails/useRegisterHotelDetails";
import Categories from "../../GuestReview/Categories";
import ListReview from "../../GuestReview/ListReview/ListReview";

const ReviewBody = () => {
  const { hotels, loading } = useRegisterHotelDetails();

  return (
    <div className='flex flex-row w-full h-full'>
      <div className='w-full h-full p-2'>
        <ListReview
          reviewData={hotels?.reviewSyntheticResponse?.reviewResponse}
          style
          vertical
          loading={loading}
        />
        <Categories vertical />
      </div>
    </div>
  );
};

export default ReviewBody;
