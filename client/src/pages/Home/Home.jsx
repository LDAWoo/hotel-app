import RecentSearch from "./RecentSearch/RecentSearch";

function Home() {
  return (
    <div className='w-full'>
      <div className='w-full m-auto lg:max-w-[1100px] mt-10 p-0 bg-transparent'>
        <div className='flex flex-col w-full'>
          <RecentSearch />
        </div>
      </div>
    </div>
  );
}

export default Home;
