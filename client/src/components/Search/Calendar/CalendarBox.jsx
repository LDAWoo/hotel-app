import { format } from "date-fns";
import * as locales from "date-fns/locale";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import useRegisterDateStore from "../../../hooks/useRegisterDateStore";
import ToolTip from "../../ToolTip/ToolTip";
import SearchBox from "../SearchBox";
import CalendarCustom from "./CalendarCustom";
import { nameMapper } from "./NameMapper";
function CalendarBox() {
  const [visible, setVisible] = useState(false);
  const { startDate, endDate } = useRegisterDateStore();

  const currentLocal = i18next.language;
  const languageCode = currentLocal.split("-")[0];
  const localeKey = languageCode.toLowerCase();
  const locale = locales[nameMapper[localeKey]];

  useEffect(() => {});

  const handleShowCalender = () => {
    setVisible(!visible);
  };
  const handleClickOutSide = () => {
    setVisible(false);
  };
  const checkOutLabel =
    startDate === endDate
      ? "Check-out date"
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
