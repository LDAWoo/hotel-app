import { useEffect, useState } from "react";
import Title from "../../../../../components/Title/Title";
import Icon from "../../../../../components/Icon/Icon";
import { IoIosArrowForward } from "react-icons/io";
import Body from "./Body";
import DescriptionModal from "../../../../../components/Modals/DescriptionModal/DescriptionModal";
import useRegisterModalDescription from "../../../../../hooks/Description/useRegisterModalDescription";
import useRegisterWindowSizeStore from "../../../../../hooks/useRegisterWindowSizeStore";
import useRegisterHotelDetails from "../../../../../hooks/HotelDetails/useRegisterHotelDetails";
import { useTranslation } from "react-i18next";

function Description() {
  const { hotels } = useRegisterHotelDetails();
  const {t} = useTranslation()

  const [state, setState] = useState({
    hotelName: "",
    startDateHotel: "",
    description: "",
  });

  const { hotelName, startDateHotel, description } = state;

  const { width } = useRegisterWindowSizeStore();
  const { onOpen } = useRegisterModalDescription();
  const [segmentsLength, setSegmentsLength] = useState(0);
  const maxSegments = width > 900 ? 5 : 1;

  useEffect(() => {
    if (description) {
      setSegmentsLength(description.trim().split(". ").length);
    }
  }, []);

  const handleShowModalDescription = () => {
    onOpen();
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      hotelName: hotels.name,
      startDateHotel: hotels?.checkInDate,
      description: hotels?.description,
    }));
  }, [hotels]);

  return (
    <div className='flex flex-col gap-2'>
      <div className='text-[14px] dark:text-white'>
        <Body data={description} maxSegments={maxSegments} />
        {description && description.length > 0 && (
          <DescriptionModal data={description} />
        )}
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
              className='underline pb-1 dark:text-white'
            />
            <Icon icon={IoIosArrowForward} size={14} />
          </button>
        )}
      </div>
      <div>
        <Title
          title={`${hotelName} ${t("HotelDetails.Description.welcome")} ${startDateHotel}.`}
          fontBold
          large
          nowrap={false}
          className='dark:text-gray-50'
        />
      </div>
    </div>
  );
}

export default Description;
