import Categories from "./Categories";
import ListReview from "./ListReview/ListReview";
import ShowAllReview from "./ShowAllReview";
import ReviewModal from "../../../components/Modals/ReviewModal/ReviewModal";
import RatingReview from "./Categories/RatingReview";
import useRegisterHotelDetails from "../../../hooks/HotelDetails/useRegisterHotelDetails";
function GuestReview() {
  const { hotels } = useRegisterHotelDetails();

  console.log(hotels);

  return (
    <section className='flex flex-col w-full mt-5'>
      <RatingReview />
      <Categories />
      <ListReview />
      <ShowAllReview />

      <ReviewModal
        body={
          <div className='flex flex-col'>
            <RatingReview />
            <Categories />
            <ListReview style />
          </div>
        }
      />
    </section>
  );
}

export default GuestReview;
