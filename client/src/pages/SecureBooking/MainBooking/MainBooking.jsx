import FinalStep from "./FinalStep/FinalStep";
import Aside from "./Aside/Aside";
import Main from "./Main/Main";

function MainBooking({data}) {

  return (
    <div className='flex flex-row gap-4'>
      <Aside />
      {
        data?.email ? <FinalStep/>  : <Main />
      }
    </div>
  );
}

export default MainBooking;
