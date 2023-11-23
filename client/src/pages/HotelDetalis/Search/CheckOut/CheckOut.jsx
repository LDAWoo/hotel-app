import Date from "../Date/Date";
import useRegisterToolTipCheckOutDate from "../../../../hooks/HotelDetails/useRegisterToolTipCheckOutDate";
import useRegisterDateStore from "../../../../hooks/useRegisterDateStore";
function CheckOut() {
  const { onOpen, isOpen } = useRegisterToolTipCheckOutDate();
  const { endDate } = useRegisterDateStore();

  const handleShowCheckOutDate = () => {
    onOpen();
  };

  return (
    <Date
      title='Check-out-date'
      userRegisterToolTip={useRegisterToolTipCheckOutDate}
      date={endDate}
      active={isOpen}
      onClick={handleShowCheckOutDate}
    />
  );
}

export default CheckOut;
