import Search from "../Search/Search";

function Banner() {
  return (
    <div className='relative'>
      <div className='relative w-full bg-hotel-200'>
        <div className='relative w-full m-auto bg-hotel-200 lg:max-w-[1100px] mb-10'>
          <div className='text-white h-20'>Banner</div>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Banner;
