import Title from "../../../../../components/Title/Title";
import PropTypes from "prop-types";

function PropertyDetail({ data }) {
  return (
    <div className='flex flex-col gap-2 dark:text-white'>
      <Title title={data?.hotelName} xl className='dark:text-primary-50' />
      <Title title={data?.hotelName} fontBold xxl />
      <Title
        title={`${data?.address}, ${data?.location}`}
        xxl
        nowrap={false}
        className='dark:text-primary-50'
      />
    </div>
  );
}

PropertyDetail.propTypes = {
  data: PropTypes.object,
};

export default PropertyDetail;
