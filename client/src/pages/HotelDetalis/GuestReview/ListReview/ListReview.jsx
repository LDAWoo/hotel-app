import PropTypes from "prop-types";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import CarouselCustom from "../../../../components/Carousel/CarouselCustom";
import ReadMoreModal from "../../../../components/Modals/ReviewModal/ReadMoreModal";
import Title from "../../../../components/Title/Title";
import useRegisterModalReadMoreReview from "../../../../hooks/Review/useRegisterModalReadMoreReview";
import CardReview from "./CardReview";
import useRegisterWindowSizeStore from "../../../../hooks/useRegisterWindowSizeStore";

const ListReview = ({ reviewData, vertical, style }) => {
  const [selectedReview, setSelectedReview] = useState([]);
  const { width } = useRegisterWindowSizeStore();
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
        <div>
          <CarouselCustom
            spaceBetween={15}
            slidesPerView={width >= 900 ? 3 : width >= 640 ? 2 : 1}
            modules={[Navigation]}
            slides={reviewData?.listResult}
            component={(props) => (
              <CardReview
                {...props}
                onReadMoreClick={handleReadMoreInsideCard}
              />
            )}
          />
        </div>
      ) : (
        <>
          {reviewData?.listResult.map((review, index) => (
            <>
              <CardReview
                key={index}
                item={review}
                border
                style
                vertical={vertical}
              />
            </>
          ))}
        </>
      )}

      {selectedReview && (
        <ReadMoreModal body={<CardReview item={selectedReview} style />} />
      )}
    </div>
  );
};

ListReview.propTypes = {
  style: PropTypes.bool,
  reviewData: PropTypes.object,
  vertical: PropTypes.bool,
};

export default ListReview;
