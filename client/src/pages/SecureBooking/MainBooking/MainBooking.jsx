import Aside from "./Aside/Aside";
import Main from "./Main/Main";

function MainBooking() {
  return (
    <div className='flex flex-row gap-4'>
      <Aside />
      <Main />
    </div>
  );
}

export default MainBooking;
