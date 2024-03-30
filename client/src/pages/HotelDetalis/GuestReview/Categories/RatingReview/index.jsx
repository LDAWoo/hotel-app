import { useTranslation } from "react-i18next";
import StayingRating from "../../../../../components/Staying/StayingRating";
import Title from "../../../../../components/Title/Title";

const RatingReview = ({ data }) => {
  const {t} = useTranslation()

  return (
    <>
      <div className='flex flex-row gap-2 items-center dark:text-white mb-2'>
        <StayingRating rating={data?.rating} />
        <Title title={`${data?.countView} ${t("Other.previews")}`} fontMedium xl />
      </div>
    </>
  );
};

export default RatingReview;
