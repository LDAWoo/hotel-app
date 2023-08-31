import { format } from "date-fns";
import { useEffect, useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import useRegisterDateStore from "../../../hooks/useRegisterDateStore";
import { getLocale } from "../../Locale/Locale";
import ToolTip from "../../ToolTip/ToolTip";
import SearchBox from "../SearchBox";
import CalendarCustom from "./CalendarCustom";
import { useTranslation } from "react-i18next";
function CalendarBox() {
  const [visible, setVisible] = useState(false);
  const { startDate, endDate } = useRegisterDateStore();
  const locale = getLocale();
  const { t } = useTranslation();
  useEffect(() => {});

  const handleShowCalender = () => {
    setVisible(!visible);
  };
  const handleClickOutSide = () => {
    setVisible(false);
  };
  const checkOutLabel =
    startDate === endDate
      ? t("Search.checkOutDate")
      : format(endDate, "EEE, MMM d", { locale });

  return (
    <div className='relative w-full'>
      <ToolTip
        typeToolTip='TippyHeadless'
        items={<CalendarCustom />}
        isVisible={visible}
        width={700}
        placement='bottom-start'
        onClickOutside={handleClickOutSide}
      >
        <div>
          <SearchBox
            onClick={handleShowCalender}
            icon={LuCalendarDays}
            size={24}
            button
            label={`${format(startDate, "EEE, MMM d", {
              locale,
            })} - ${checkOutLabel}`}
          />
        </div>
      </ToolTip>
    </div>
  );
}

export default CalendarBox;
