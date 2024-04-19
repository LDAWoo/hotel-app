import Head from "./Head/Head";
import Body from "../Body/Body";

const AvailabilityTable = ({ data }) => {
  return (
    <>
      <table className='table-auto table w-full'>
        <Head />
        <Body data={data} />
      </table>
    </>
  );
};

export default AvailabilityTable;
