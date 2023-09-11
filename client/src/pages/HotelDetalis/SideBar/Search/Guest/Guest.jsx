import GuestBox from "../../../../../components/Search/Guest/GuestBox";

function Guest({ title }) {
  return (
    <>
      <div>
        <span className='text-primary-700 text-[14px]'>{title}</span>
      </div>
      <GuestBox />
    </>
  );
}

export default Guest;
