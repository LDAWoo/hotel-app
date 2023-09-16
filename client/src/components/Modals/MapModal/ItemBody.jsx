import PropTypes from "prop-types";
import { Fragment } from "react";
import Card from "../../../pages/Home/OurHotel/Card";
import HotelCardSkeleton from "../../../pages/Home/OurHotel/HotelCardSkeleton";
function ItemBody({ data, isLoading }) {
  return (
    <div className=''>
      <div className='pt-2 flex flex-col h-full'>
        <div className='grid grid-cols-1 gap-y-8'>
          {data?.products?.map((card, index) => (
            <Fragment key={index}>
              {isLoading ? <HotelCardSkeleton /> : <Card data={card} />}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

ItemBody.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemBody;
