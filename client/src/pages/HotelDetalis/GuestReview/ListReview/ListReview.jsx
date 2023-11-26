import { useState } from "react";
import CarouselCustom from "../../../../components/Carousel/CarouselCustom";
import ReadMoreModal from "../../../../components/Modals/ReviewModal/ReadMoreModal";
import Title from "../../../../components/Title/Title";
import useRegisterModalReadMoreReview from "../../../../hooks/Review/useRegisterModalReadMoreReview";
import CardReview from "./CardReview";
import PropTypes from "prop-types";

const ListReview = ({ reviewData, vertical, style }) => {
  const [selectedReview, setSelectedReview] = useState({});
  const { onOpen } = useRegisterModalReadMoreReview();

  const handleReadMoreInsideCard = (reviewData) => {
    setSelectedReview(reviewData);
    onOpen();
  };

  return (
    <div className='flex flex-col mt-5 w-full gap-2'>
      <div className='flex flex-row items-center'>
        <Title
          title='See what guests loved the most:'
          fontBold
          xl
          colorTitle='dark:text-white'
        />
      </div>
      {!style ? (
        <CarouselCustom
          data={reviewData?.listResult?.map((review, index) => (
            <CardReview
              displayName={review?.fullName}
              src={review?.src}
              description={review?.reviewContent}
              rating={review?.rating}
              reviewResponse={review?.feedbacks}
              key={index}
              onReadMoreClick={() => handleReadMoreInsideCard(review)}
            />
          ))}
        />
      ) : (
        <>
          {reviewData?.listResult.map((review, index) => (
            <>
              <CardReview
                displayName={review?.fullName}
                src={review?.src}
                description={review?.reviewContent}
                date={review?.reviewDate}
                rating={review?.rating}
                reviewResponse={review?.feedbacks}
                key={index}
                border
                style
                vertical={vertical}
              />
            </>
          ))}
        </>
      )}

      <ReadMoreModal
        body={
          <CardReview
            displayName={selectedReview?.fullName}
            src={selectedReview?.src}
            description={selectedReview?.reviewContent}
            rating={selectedReview?.rating}
            reviewResponse={selectedReview?.feedbacks}
            date={selectedReview?.reviewDate}
            style
          />
        }
      />
    </div>
  );
};

ListReview.propTypes = {
  style: PropTypes.bool,
  reviewData: PropTypes.object,
  vertical: PropTypes.bool,
};

export default ListReview;
