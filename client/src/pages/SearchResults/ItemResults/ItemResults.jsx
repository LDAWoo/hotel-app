import { Fragment } from "react";
import Title from "../../../components/Title/Title";
import Card from "../../Home/OurHotel/Card";
import PropTypes from "prop-types";
import CardContent from "../../Home/OurHotel/CardContent";

function ItemResults({ data, isLoading }) {
  return (
    <div className='w-full h-full relative'>
      <div className='flex flex-col w-full h-full relative'>
        <div className='mb-2'>
          <Title
            title=' Ho Chi Minh City: 584 properties found'
            xl
            fontBold
            colorTitle='dark:text-white'
            nowrap={false}
          />
        </div>
        {data ? (
          <div className='grid gap-3 auto-cols-auto grid-cols-1 vsm:grid-cols-2 w-full'>
            {data?.products?.map((card, index) => (
              <Fragment key={index}>
                <Card data={card} isLoading={isLoading}>
                  <CardContent data={card} />
                </Card>
              </Fragment>
            ))}
          </div>
        ) : (
          <div>Not Result</div>
        )}
      </div>
    </div>
  );
}
ItemResults.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
};
export default ItemResults;
