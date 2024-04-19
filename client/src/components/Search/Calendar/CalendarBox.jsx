import { format, parseISO } from "date-fns";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LuCalendarDays } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";
import useRegisterDateStore from "../../../hooks/useRegisterDateStore";
import useRegisterToolTipCalendar from "../../../hooks/useRegisterToolTipCalendar";
import { getLocale } from "../../Locale/Locale";
import TitleComponent from "../../TitleComponent/TitleComponent";
import RegisterToolTip from "../../ToolTip/RegisterToolTip/RegisterToolTip";
import SearchBox from "../SearchBox/SearchItem";
import CalendarCustom from "./CalendarCustom";
function CalendarBox() {
  const { onOpen, onClose } = useRegisterToolTipCalendar();
  const [searchParams] = useSearchParams();
  const currentCheckInDate = searchParams.get("checkin") || "";
  const currentCheckOutDate = searchParams.get("checkout") || "";

  const { startDate, endDate, setStartDate, setEndDate } =
    useRegisterDateStore();
  const locale = getLocale();
  const { t } = useTranslation();

  useEffect(() => {
    if(currentCheckInDate) {
      const date = parseISO(currentCheckInDate);
      if (!isNaN(date.getTime())) {
        setStartDate(date);
      }
    }
    if(currentCheckOutDate) {
      const date = parseISO(currentCheckOutDate);
      if (!isNaN(date.getTime())) {
        setEndDate(date);
      }
    }
  },[currentCheckInDate,currentCheckOutDate])

  const handleShowCalender = () => {
    onOpen();
  };

  const checkOutLabel =
    startDate === endDate
      ? t("Search.checkOutDate")
      : format(endDate, "EEE, MMM d", { locale });


  useEffect(() => {
    if(endDate > startDate) {
      onClose();
    }
  },[endDate])

  return (
    <div className='relative w-full'>
      <SearchBox
        onClick={handleShowCalender}
        icon={LuCalendarDays}
        size={14}
        button
        label={`${format(startDate, "EEE, MMM d", {
          locale,
        })} - ${checkOutLabel}`}
      />
      <RegisterToolTip
        userRegisterToolTip={useRegisterToolTipCalendar}
        component={
          <TitleComponent
            title={`${format(startDate, "EEE, MMM d", {
              locale,
            })} - ${checkOutLabel}`}
            icon={LuCalendarDays}
          />
        }
        render={<CalendarCustom months={2} />}
        width={700}
        zIndex='z-[999]'
      />
    </div>
  );
}

export default CalendarBox;
