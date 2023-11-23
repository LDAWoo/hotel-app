import StayingRating from "../../../../components/Staying/StayingRating";
import Title from "../../../../components/Title/Title";
import useRegisterHotelDetails from "../../../../hooks/HotelDetails/useRegisterHotelDetails";
import Location from "./Location/Location";

function Header() {
  const { hotels } = useRegisterHotelDetails();

  return (
    <div className='w-full'>
      <div className='w-full flex flex-col'>
        <div></div>
        <div className='flex w-full'>
          <div className='flex flex-1 items-center'>
            <Title
              title={hotels?.name}
              fontBold
              extraLarge5
              colorTitle='dark:text-white'
            />
          </div>
          {hotels?.rating > 0 && <StayingRating rating={hotels?.rating} />}
        </div>
        <Location data={hotels} />
      </div>
    </div>
  );
}

export default Header;
