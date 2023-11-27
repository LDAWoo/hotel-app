import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

function AccountHeader() {
  return (
    <div className='flex items-center bg-hotel-600 w-full'>
      <header className='w-full'>
        <nav className='flex flex-row w-full box-border items-center m-auto pt-1 pb-1 max-w-[var(--max-width)] bg-hotel-600 p-[10px]'>
          <div className='flex-1 pt-1 pb-1 pr-3 bg-hotel-600'>
            <HeaderLeft />
          </div>
          <div className='flex items-end'>
            <HeaderRight />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default AccountHeader;
