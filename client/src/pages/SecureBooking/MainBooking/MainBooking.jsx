import FinalStep from "./FinalStep/FinalStep";
import Aside from "./Aside/Aside";
import Main from "./Main/Main";

function MainBooking({currentSource}) {

  return (
    <div className='flex flex-row gap-4'>
      <Aside />
      {currentSource ==="details" && <Main />}
      {currentSource ==="final" && <FinalStep />}
    </div>
  );
}

export default MainBooking;
