import useRegisterToolTipCheckInDate from "../../../../hooks/HotelDetails/useRegisterToolTipCheckInDate";
import useRegisterDateStore from "../../../../hooks/useRegisterDateStore";
import Date from "../Date/Date";

const CheckIn = () => {
  const { onOpen, isOpen } = useRegisterToolTipCheckInDate();
  const { startDate } = useRegisterDateStore();

  const handleShowCheckInDate = () => {
    onOpen();
  };

  return (
    <Date
      title='Check-out-date'
      userRegisterToolTip={useRegisterToolTipCheckInDate}
      date={startDate}
      active={isOpen}
      onClick={handleShowCheckInDate}
    />
  );
};

export default CheckIn;
