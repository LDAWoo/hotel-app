import Head from "./Head/Head";
import Body from "../Body/Body";

const AvailabilityTable = () => {
  return (
    <>
      <table className='table-auto table border-collapse border-hotel-100 dark:border-primary-600 w-full'>
        <Head />
        <Body />
      </table>
    </>
  );
};

export default AvailabilityTable;
