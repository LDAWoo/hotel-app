import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

function Header() {
  return (
    <div className='flex items-center justify-center bg-hotel-200 w-full'>
      <header className='flex w-full'>
        <nav className='flex box-border items-center m-auto pt-1 pb-1 pl-3 pr-3 w-full bg-hotel-200 lg:max-w-[1100px]'>
          <div className='flex-1 pt-1 pb-1 pr-3 bg-hotel-200'>
            <HeaderLeft />
          </div>
          <div className='flex flex-row items-center justify-end'>
            <HeaderRight />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
