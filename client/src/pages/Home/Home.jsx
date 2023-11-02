import RecentSearch from "./RecentSearch/RecentSearch";
import TrendingDestination from "./TrendingDestinations/TrendingDestination";
import OurHotel from "./OurHotel/OurHotel";
import UniqueProperty from "./UniqueProperty/UniqueProperty";
import GuestLove from "./GuestLove/GuestLove";

function Home() {
  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 p-[10px] bg-transparent'>
        <div className='flex flex-col w-full'>
          <RecentSearch />
          <TrendingDestination />
          {/* <OurHotel /> */}
          <UniqueProperty />
          <GuestLove />
        </div>
      </div>
    </div>
  );
}

export default Home;
