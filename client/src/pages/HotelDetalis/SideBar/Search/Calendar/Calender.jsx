import CalendarBox from "../../../../../components/Search/Calendar/CalendarBox";

function Calender({ title }) {
  return (
    <>
      <div>
        <span className='text-primary-700 text-[14px]'>{title}</span>
      </div>
      <CalendarBox />
    </>
  );
}

export default Calender;
