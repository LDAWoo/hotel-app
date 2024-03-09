import Categories from "./Categories";
import ListReview from "./ListReview/ListReview";
import ShowAllReview from "./ShowAllReview";
import ReviewModal from "../../../components/Modals/ReviewModal/ReviewModal";
import RatingReview from "./Categories/RatingReview";
import useRegisterHotelDetails from "../../../hooks/HotelDetails/useRegisterHotelDetails";
function GuestReview() {
  const { hotels, loading } = useRegisterHotelDetails();

  console.log(hotels);

  return (
    <section className='flex flex-col gap-2 w-full mt-5'>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <RatingReview data={hotels} />
          <Categories data={hotels?.reviewSyntheticResponse} />
          <ListReview
            reviewData={
              hotels?.reviewSyntheticResponse?.reviewResponse &&
              hotels?.reviewSyntheticResponse?.reviewResponse
            }
            style={false}
          />
          <ShowAllReview />

          <ReviewModal
            body={
              <div className='flex flex-col'>
                <RatingReview data={hotels} />
                <Categories data={hotels?.reviewSyntheticResponse} />
                <ListReview
                  style
                  reviewData={hotels?.reviewSyntheticResponse?.reviewResponse}
                />
              </div>
            }
          />
        </>
      )}
    </section>
  );
}

export default GuestReview;
