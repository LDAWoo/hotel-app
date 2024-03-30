import Date from "../Date/Date";
import useRegisterToolTipCheckOutDate from "../../../../hooks/HotelDetails/useRegisterToolTipCheckOutDate";
import useRegisterDateStore from "../../../../hooks/useRegisterDateStore";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { parseISO } from "date-fns";
import { useTranslation } from "react-i18next";
function CheckOut() {
  const { onOpen, isOpen } = useRegisterToolTipCheckOutDate();
  const { endDate,setEndDate } = useRegisterDateStore();
  const {t} = useTranslation()
  const [searchParams] = useSearchParams();
  const currentCheckOutDate = searchParams.get("checkout") || "";

  useEffect(() => {
    if(currentCheckOutDate) {
      const date = parseISO(currentCheckOutDate);
      if (!isNaN(date.getTime())) {
        setEndDate(date);
      }
    }
  },[currentCheckOutDate])

  const handleShowCheckOutDate = () => {
    onOpen();
  };

  return (
    <Date
    title={t("HotelDetails.Search.checkOutDate")}
      userRegisterToolTip={useRegisterToolTipCheckOutDate}
      date={endDate}
      active={isOpen}
      onClick={handleShowCheckOutDate}
    />
  );
}

export default CheckOut;
