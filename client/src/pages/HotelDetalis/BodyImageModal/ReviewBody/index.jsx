import Categories from "../../GuestReview/Categories";
import ListReview from "../../GuestReview/ListReview/ListReview";

const ReviewBody = () => {
  return (
    <div className='flex flex-row w-full h-full'>
      <div className='w-full h-full p-2'>
        <ListReview style vertical />
        <Categories vertical />
      </div>
    </div>
  );
};

export default ReviewBody;
