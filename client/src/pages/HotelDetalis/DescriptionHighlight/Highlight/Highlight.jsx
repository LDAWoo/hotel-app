import { AiOutlineHeart } from "react-icons/ai";
import Button from "../../../../components/Buttons/Button";
import Title from "../../../../components/Title/Title";
import useRegisterHotelDetails from "../../../../hooks/HotelDetails/useRegisterHotelDetails";
// import MoneyFormatStaying from '../../../../components/Staying/MoneyFormatStaying'

function Highlight() {
  const { hotels } = useRegisterHotelDetails();

  return (
    <div className='w-full 2md:w-[33.33%] 2md:basis-[33.33%] 2md:max-w-[33.33%] pt-3'>
      <div className='relative w-full m-0 p-0'>
        <div className='flex flex-col gap-2 border-0 bg-hotel-25 dark:bg-primary-50 clear-both p-3 w-full rounded-[2px]'>
          <Title title='Property highlights' fontBold xl />

          {/* footer */}

          <div className='flex flex-col w-full gap-2'>
            <Button
              title='Reserve'
              fontMedium
              xl
              className='pt-[6px] pb-[6px] pl-5 pr-5 duration-300 bg-hotel-100 hover:bg-hotel-200 flex items-center justify-center text-white whitespace-pre-wrap'
            />
            {/* <div className='flex flex-col'>
              <Button
                className='flex items-center justify-center pt-[6px] pb-[6px] pl-3 pr-3 border-[1px] border-hotel-100 hover:border-hotel-300'
                title='Save the property'
                classTitle='text-hotel-200'
                classIcon='text-hotel-200'
                size={20}
                fontMedium
                xl
                icon={AiOutlineHeart}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
