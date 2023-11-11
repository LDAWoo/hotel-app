import { useTranslation } from "react-i18next";
import HomeTitle from "../HomeTitle";
import CarouselCustom from "../../../components/Carousel/CarouselCustom";
import ItemUniqueProperty from "./ItemUniqueProperty";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ItemUniquePropertySkeleton from "./ItemUniquePropertySkeleton";

const UniqueProperty = ({ data = [], isLoading }) => {
  const [currentUniqueProperty, setCurrentUniqueProperty] = useState([]);

  useEffect(() => {
    if (!isLoading && data.length > 0) {
      setCurrentUniqueProperty(data[1].data);
    }
  }, [data]);

  console.log(currentUniqueProperty);

  const { t } = useTranslation();
  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <HomeTitle
            title='Stay at our top unique properties'
            subTitle="From castles and villas to boats and igloos, we've got it all "
          />
        </div>
        {isLoading ? (
          <div className='flex gap-4'>
            {Array.from({ length: 4 }).map((_, index) => (
              <ItemUniquePropertySkeleton key={index} />
            ))}
          </div>
        ) : (
          <div>
            <CarouselCustom
              size={4}
              data={currentUniqueProperty.map((item, index) => (
                <ItemUniqueProperty
                  key={index}
                  name={item?.nameHotel}
                  image={item?.picByte}
                  districtAddress={item?.districtAddress}
                  city={item?.city}
                  country={item?.country}
                  reviews={item?.countReview}
                  ratings={item?.reviewRating}
                />
              ))}
            />
          </div>
        )}
      </div>
    </div>
  );
};

UniqueProperty.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default UniqueProperty;
