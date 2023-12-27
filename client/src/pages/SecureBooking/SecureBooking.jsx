import MainBooking from "./MainBooking/MainBooking";
import ProgressBooking from "./ProgressBooking/ProgressBooking";

const SecureBooking = () => {
  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 p-[10px] bg-transparent'>
        <div className='flex flex-col w-full gap-4'>
          <ProgressBooking />
          <MainBooking />
        </div>
      </div>
    </div>
  );
};

export default SecureBooking;
