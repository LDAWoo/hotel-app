import BathRooms from "./BathRooms/BathRooms";
import BedRooms from "./Bedrooms/Bedrooms";
import Budget from "./Budget/Budget";
import Facilities from "./Facilities/Facilities";
import PropertyRating from "./PropertyRating/PropertyRating";

function Filter({hidden}) {
  return (
    <div className={`flex relative w-full items-center ${hidden && 'hidden'}`}>
      <div className='w-full flex items-center rounded-md border dark:bg-primary-600 dark:border-primary-500'>
        <div className='flex flex-col w-full'>
          <Budget />
          {/* <PropertyRating />
          <BedRooms />
          <BathRooms />
          <Facilities /> */}
        </div>
      </div>
    </div>
  );
}

export default Filter;
