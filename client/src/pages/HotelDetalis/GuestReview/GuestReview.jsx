import ReviewModal from "../../../components/Modals/ReviewModal/ReviewModal";
import Title from "../../../components/Title/Title";
import useRegisterHotelDetails from "../../../hooks/HotelDetails/useRegisterHotelDetails";
import Reserve from "../Availability/AvailabilityRoom/AvailabilitySummary/Reserve";
import Categories from "./Categories";
import RatingReview from "./Categories/RatingReview";
import ListReview from "./ListReview/ListReview";
import ShowAllReview from "./ShowAllReview";
function GuestReview() {
  const { hotels } = useRegisterHotelDetails();

  return (
    <section className='flex flex-col gap-2 w-full mt-5'>
        <>
          <Title title="Guest reviews" extraLarge4 fontBold/>
          <RatingReview data={hotels} />
          <Categories data={hotels?.reviewSyntheticResponse} />
          {hotels?.reviewSyntheticResponse?.reviewResponse.length > 0 &&
            <>
              <ListReview
                reviewData={
                  hotels?.reviewSyntheticResponse?.reviewResponse &&
                  hotels?.reviewSyntheticResponse?.reviewResponse
                }
                style={false}
              />
              <ShowAllReview />
            </>
          }

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
            footer={<div className="w-full"><Reserve/></div>}
          />
        </>
    </section>
  );
}

export default GuestReview;
