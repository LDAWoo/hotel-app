import LocationBox from "../../../../../components/Search/Location/LocationBox";

function Location({ title }) {
  return (
    <>
      <div>
        <span className='text-primary-700 text-[14px]'>{title}</span>
      </div>
      <LocationBox />
    </>
  );
}

export default Location;
