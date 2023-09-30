import { useState } from "react";
import CarouselCustom from "../../../../components/Carousel/CarouselCustom";
import ReadMoreModal from "../../../../components/Modals/ReviewModal/ReadMoreModal";
import Title from "../../../../components/Title/Title";
import useRegisterModalReadMoreReview from "../../../../hooks/Review/useRegisterModalReadMoreReview";
import CardReview from "./CardReview";
import PropTypes from "prop-types";

const data = [
  {
    id: 1,
    displayName: "Rosa",
    src: "https://cf.bstatic.com/static/img/review/avatars/ava-r/29d5c93ac6953138bfc6f214a4c5a0f8b712b57b.png",
    rating: 4.5,
    reviewResponse:
      "Dear Hannah! Thank you for taking a moment to share your experience at Ripetta Suites. We are so pleased to hear you found our hotel and service to your liking! We are happy you appreciated the location as we are just in the heart of historical centre. We take pride in providing the best service to al our guest and we are happy that you noticed. we are sorry your stay wasn't perfect, we much appreciated your opinion as it will help us to improve on everything we do. It was a pleasure to have you as a guest and we hope to see you again very soon. Kindly Elena Ripetta Front Office.",
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.”",
  },
  {
    id: 2,
    displayName: "Henry",
    src: "https://cf.bstatic.com/static/img/review/avatars/ava-h/41b962c4f1fcefa6bb9c4a8bc7bfed064a71691b.png",
    rating: 3.5,
    reviewResponse:
      "Dear Chen! Thank you for taking a moment to share your experience at Ripetta Natural Suites. We are so pleased to hear you found our hotel and service to your liking! We look forward to welcoming you back again soon. Kindly Elena Ripetta Front Office",
    description:
      "“We loved the location - it's perfect for walking to all main attractions of Rome, and 25-30 min walk to Vatican City too. If, by the end of the day we'd find ourselves wandered out too far to walk back - it's 5 min walk away from Metro station and bus stop is right behind the building too. We used both and were very happy. Room was tidied up every morning for us and ladies at hotel couldn't have been more friendly and welcoming.”",
  },
  {
    id: 3,
    rating: 2.5,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.3”",
  },
  {
    id: 4,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.4”",
  },
  {
    id: 5,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.5”",
  },
  {
    id: 6,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.6”",
  },
  {
    id: 7,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.7”",
  },
  {
    id: 8,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.8”",
  },
  {
    id: 9,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.9”",
  },
  {
    id: 10,
    description:
      "“Lovely hotel - comfortable, nicely decorated room and in a perfect location, we found several great restaurants literally across the road which was just what we needed after busy days sightseeing.10”",
  },
];
const ListReview = ({ vertical, style }) => {
  const [selectedReview, setSelectedReview] = useState(null);
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
          data={data?.map((item, index) => (
            <CardReview
              displayName={item?.displayName}
              src={item?.src}
              description={item?.description}
              rating={item?.rating}
              reviewResponse={item?.reviewResponse}
              key={index}
              onReadMoreClick={() => handleReadMoreInsideCard(item)}
            />
          ))}
        />
      ) : (
        <>
          {data?.map((item, index) => (
            <>
              <CardReview
                displayName={item?.displayName}
                src={item?.src}
                description={item?.description}
                rating={item?.rating}
                reviewResponse={item?.reviewResponse}
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
            displayName={selectedReview?.displayName}
            src={selectedReview?.src}
            description={selectedReview?.description}
            rating={selectedReview?.rating}
            reviewResponse={selectedReview?.reviewResponse}
            style
          />
        }
      />
    </div>
  );
};

ListReview.propTypes = {
  style: PropTypes.bool,
};

export default ListReview;
