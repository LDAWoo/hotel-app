import useRegisterHotelDetails from "../../../hooks/HotelDetails/useRegisterHotelDetails";
import Description from "./Description/Description";
import Highlight from "./Highlight/Highlight";

function DescriptionHighlight() {
  const { hotels } = useRegisterHotelDetails();

  return (
    <>
      <div className='flex flex-col 2md:flex-row'>
        {/* Description */}
        <Description />
        {/* Highlight */}
        <Highlight data={hotels} />
      </div>
    </>
  );
}

export default DescriptionHighlight;
