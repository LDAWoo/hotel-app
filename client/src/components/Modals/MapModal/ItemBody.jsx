import PropTypes from "prop-types";
import { Fragment, memo } from "react";
import CardBody from "./CardBody";
function ItemBody({ data }) {
  return (
    <div className='w-full'>
      <div className='pt-2 flex flex-col h-full w-full'>
        <div className='grid grid-cols-1 gap-y-3'>
          {data?.map((items, index) => (
            <Fragment key={index}>
              <CardBody items={items} border />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

ItemBody.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default memo(ItemBody);
