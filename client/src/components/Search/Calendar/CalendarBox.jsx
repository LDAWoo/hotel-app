import { format } from "date-fns";
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
  const [searchParams] = useSearchParams();
  const checkIn = searchParams.get("checkin");
  const checkOut = searchParams.get("checkout");

  const { startDate, endDate, setStartDate, setEndDate } =
    useRegisterDateStore();
  const locale = getLocale();
  const { t } = useTranslation();

  const validateStartDate = (date) => {
    if (isNaN(date) || new Date(date) < new Date()) {
      setStartDate(new Date());
    } else {
      setStartDate(new Date(date));
    }
  };

  const validateEndDate = (date) => {
    if (isNaN(date) || new Date(date) < new Date()) {
      setEndDate(new Date());
    } else {
      setEndDate(new Date(date));
    }
  };

  useEffect(() => {
    validateStartDate(checkIn);
    validateEndDate(checkOut);
  }, []);

  const { onOpen } = useRegisterToolTipCalendar();
  const handleShowCalender = () => {
    onOpen();
  };

  const checkOutLabel =
    startDate === endDate
      ? t("Search.checkOutDate")
      : format(endDate, "EEE, MMM d", { locale });

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
        render={<CalendarCustom />}
        width={700}
        zIndex='z-[999]'
      />
    </div>
  );
}

export default CalendarBox;
