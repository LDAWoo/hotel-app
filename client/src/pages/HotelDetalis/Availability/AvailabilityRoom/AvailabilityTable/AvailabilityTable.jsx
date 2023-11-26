import Head from "./Head/Head";
import Body from "../Body/Body";

const AvailabilityTable = ({ data }) => {
  return (
    <>
      <table className='table-auto table border-collapse border-hotel-100 dark:border-primary-500 w-full'>
        <Head />
        <Body data={data} />
      </table>
    </>
  );
};

export default AvailabilityTable;
