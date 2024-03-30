import { parseISO } from "date-fns";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useRegisterToolTipCheckInDate from "../../../../hooks/HotelDetails/useRegisterToolTipCheckInDate";
import useRegisterDateStore from "../../../../hooks/useRegisterDateStore";
import Date from "../Date/Date";
import { useTranslation } from "react-i18next";

const CheckIn = () => {
  const { onOpen, isOpen } = useRegisterToolTipCheckInDate();
  const { startDate,setStartDate } = useRegisterDateStore();
  const {t} = useTranslation()
  const [searchParams] = useSearchParams();
  const currentCheckInDate = searchParams.get("checkin") || "";

  useEffect(() => {
    if(currentCheckInDate) {
      const date = parseISO(currentCheckInDate);
      if (!isNaN(date.getTime())) {
        setStartDate(date);
      }
    }
  },[currentCheckInDate])

  const handleShowCheckInDate = () => {
    onOpen();
  };

  return (
    <Date
      title={t("HotelDetails.Search.checkInDate")}
      userRegisterToolTip={useRegisterToolTipCheckInDate}
      date={startDate}
      active={isOpen}
      onClick={handleShowCheckInDate}
    />
  );
};

export default CheckIn;
