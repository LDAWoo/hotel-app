import GuestAdult from "./GuestAdult";
import GuestChildren from "./GuestChildren";
import GuestRoom from "./GuestRoom";
function GuestMenu() {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-full flex flex-col items-center justify-center m-1 p-4 gap-2'>
        <GuestAdult />
        <GuestChildren />
        <GuestRoom />
      </div>
    </div>
  );
}

export default GuestMenu;
