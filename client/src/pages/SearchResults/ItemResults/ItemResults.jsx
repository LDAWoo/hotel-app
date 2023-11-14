import Title from "../../../components/Title/Title";
import PropTypes from "prop-types";
import CardResult from "./CardResult";

function ItemResults({ data, isLoading }) {
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
        {data ? (
          // <div className='grid gap-3 auto-cols-auto grid-cols-1 vsm:grid-cols-2 w-full'>
          //   {data?.products?.map((card, index) => (
          //     <Fragment key={index}>
          //       <Card data={card} isLoading={isLoading}>
          //         <CardContent data={card} />
          //       </Card>
          //     </Fragment>
          //   ))}
          // </div>
          <>
            <CardResult />
            <CardResult />
          </>
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
