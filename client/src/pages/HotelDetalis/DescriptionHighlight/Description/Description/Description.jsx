import { useEffect, useState } from "react";
import Title from "../../../../../components/Title/Title";
import Icon from "../../../../../components/Icon/Icon";
import { IoIosArrowForward } from "react-icons/io";
import Body from "./Body";
import DescriptionModal from "../../../../../components/Modals/DescriptionModal/DescriptionModal";
import useRegisterModalDescription from "../../../../../hooks/Description/useRegisterModalDescription";
import useRegisterWindowSizeStore from "../../../../../hooks/useRegisterWindowSizeStore";

function Description() {
  const hotelName = "Bon Ami Hotel - Thien Xuan Hotel";
  const startDateHotel = "9 tháng 8 2023";
  const description =
    "Set in Vung Tau, 500 metres from Back Beach, CAROLINE SEA HOTEL provides accommodation with free WiFi and free private parking. The property is located 1.9 km from Front Beach, 2.6 km from Pineapple Beach and 2.2 km from Nghinh Phong Cape. The accommodation offers room service, a 24-hour front desk and currency exchange for guests. At the hotel, every room comes with a desk. Complete with a private bathroom fitted with a bidet and free toiletries, all guest rooms at CAROLINE SEA HOTEL have a flat-screen TV and air conditioning, and certain rooms also offer a terrace. H";

  const { width } = useRegisterWindowSizeStore();
  const { onOpen } = useRegisterModalDescription();
  const [segmentsLength, setSegmentsLength] = useState();
  const maxSegments = width > 900 ? 5 : 1;

  useEffect(() => {
    setSegmentsLength(description.trim().split(". ").length);
  }, []);

  const handleShowModalDescription = () => {
    onOpen();
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='text-[14px] dark:text-white'>
        <Body data={description} maxSegments={maxSegments} />
        <DescriptionModal data={description} />
        {segmentsLength > maxSegments && (
          <button
            className='flex mt-2 items-center gap-[2px]'
            type='button'
            onClick={handleShowModalDescription}
          >
            <Title
              fontMedium
              title='Show more'
              xl
              titleCustom='underline pb-1 dark:text-white'
            />
            <Icon icon={IoIosArrowForward} size={14} />
          </button>
        )}
      </div>
      <div>
        <Title
          title={`${hotelName} đã chào đón khách Staying từ ${startDateHotel}.`}
          fontBold
          large
          nowrap={false}
          colorTitle='dark:text-gray-50'
        />
      </div>
    </div>
  );
}

export default Description;
