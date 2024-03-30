import Title from "../../../../../components/Title/Title";
import SummaryRoomAndPrice from "./SummaryRoomAndPrice";
import Reserve from "./Reserve";
import Ticket from "./Ticket";
import { useTranslation } from "react-i18next";

const AvailabilitySummary = ({ data }) => {
  const {t} = useTranslation();

  return (
    <>
      <div className='h-[48px] bg-[#4c76b2] sticky top-[-1px] z-[1]'></div>
      <div className='flex flex-col gap-1 p-2 sticky top-[47px] z-0'>
        {/* SummaryRoomAndPrice */}
        <SummaryRoomAndPrice data={data} />
        {/* Includes */}
        <Title
          title={t("HotelDetails.Availability.taxesAndChange")}
          large
          className='dark:text-primary-700'
        />
        {/* Reserve */}
        <Reserve toolTip />
        <Ticket />
      </div>
    </>
  );
};
export default AvailabilitySummary;
