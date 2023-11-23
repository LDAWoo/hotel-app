import { IoCalendarClearOutline } from "react-icons/io5";
import Title from "../../../../components/Title/Title";
import ButtonSearch from "../ButtonSearch";
import RegisterToolTip from "../../../../components/ToolTip/RegisterToolTip/RegisterToolTip";
import { getLocale } from "../../../../components/Locale/Locale";
import { format } from "date-fns";
import TitleComponent from "../../../../components/TitleComponent/TitleComponent";
import { LuCalendarDays } from "react-icons/lu";
import CalendarCustom from "../../../../components/Search/Calendar/CalendarCustom";
import PropTypes from "prop-types";

function Date({ title, date, userRegisterToolTip, active, onClick }) {
  const locale = getLocale();
  return (
    <div className='flex flex-col w-full'>
      <Title title={title} large />
      <div className='relative'>
        <ButtonSearch
          icon={IoCalendarClearOutline}
          type='button'
          value={format(date, "d")}
          title={format(date, "EEE, d MMMM yyyy", { locale })}
          active={active}
          onClick={onClick}
        />
        <RegisterToolTip
          userRegisterToolTip={userRegisterToolTip}
          component={
            <TitleComponent
              // title={`${format(startDate, "EEE, MMM d", {
              //   locale,
              // })} - ${checkOutLabel}`}
              icon={LuCalendarDays}
            />
          }
          render={<CalendarCustom months={2} />}
          width={700}
          zIndex='z-[999]'
        />
      </div>
    </div>
  );
}

Date.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  userRegisterToolTip: PropTypes.func,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Date;
