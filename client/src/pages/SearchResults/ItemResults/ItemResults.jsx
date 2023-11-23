import Title from "../../../components/Title/Title";
import PropTypes from "prop-types";
import CardResult from "./CardResult";
import { Fragment } from "react";

function ItemResults({ data }) {
  return (
    <div className='w-full h-full relative'>
      <div className='flex flex-col w-full h-full relative'>
        <div className='mb-2'>
          <Title
            title={`${data[0]?.city}: ${data?.length} properties found`}
            xl
            fontBold
            colorTitle='dark:text-white'
            nowrap={false}
          />
        </div>
        <div className='grid gap-3 grid-cols-1 w-full'>
          {data.map((items, index) => (
            <Fragment key={index}>
              <CardResult items={items} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
ItemResults.propTypes = {
  data: PropTypes.object,
};
export default ItemResults;
