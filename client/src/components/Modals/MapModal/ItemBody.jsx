import PropTypes from "prop-types";
import { Fragment } from "react";
import CardBody from "./CardBody";
function ItemBody({ data }) {
  console.log(data);
  return (
    <div className='w-full'>
      <div className='pt-2 flex flex-col h-full w-full'>
        <div className='grid grid-cols-1 gap-y-3'>
          {data?.map((item, index) => (
            <Fragment key={index}>
              <CardBody
                id={item?.hotelId}
                name={item?.name}
                rating={item?.rating}
                image={item?.images[0]?.picByte}
                days={item?.totalDay}
                adults={item?.adults}
                child={item?.children}
                reviews={item?.countView}
                border
              />
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
