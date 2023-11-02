import { useTranslation } from "react-i18next";
import HomeTitle from "../HomeTitle";
import CarouselCustom from "../../../components/Carousel/CarouselCustom";
import ItemUniqueProperty from "./ItemUniqueProperty";
import { UniquePropertyData } from "../../../components/Constants/UniquePropertyData";

const UniqueProperty = () => {
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

        <div>
          <div>
            <CarouselCustom
              size={4}
              data={UniquePropertyData.map((item, index) => (
                <ItemUniqueProperty
                  key={index}
                  name={item?.name}
                  image={item?.image}
                  location={item?.location}
                  reviews={item?.reviews}
                  ratings={item?.ratings}
                />
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueProperty;
