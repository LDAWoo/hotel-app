import StayingRating from "../../../../../components/Staying/StayingRating";
import Title from "../../../../../components/Title/Title";

const RatingReview = () => {
  return (
    <>
      <div className='flex flex-row gap-2 items-center dark:text-white mb-2'>
        <StayingRating rating={4.5} />
        <Title title='150 reviews' fontMedium xl />
      </div>
    </>
  );
};

export default RatingReview;
