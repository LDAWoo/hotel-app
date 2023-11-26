import StayingRating from "../../../../../components/Staying/StayingRating";
import Title from "../../../../../components/Title/Title";

const RatingReview = ({ data }) => {
  return (
    <>
      <div className='flex flex-row gap-2 items-center dark:text-white mb-2'>
        <StayingRating rating={data?.rating} />
        <Title title={`${data?.countView} reviews`} fontMedium xl />
      </div>
    </>
  );
};

export default RatingReview;
