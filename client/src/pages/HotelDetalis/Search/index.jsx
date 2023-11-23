import CheckIn from "./CheckIn/ChechIn";
import CheckOut from "./CheckOut/CheckOut";
import Location from "./Location/Location";

function Search() {
  return (
    <div className='w-full flex flex-col gap-2'>
      <Location />
      <CheckIn />
      <CheckOut />
    </div>
  );
}

export default Search;
