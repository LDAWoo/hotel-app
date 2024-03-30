import { useTranslation } from "react-i18next";
import Col from "../Col/Col";
const Head = () => {
  const {t} = useTranslation()
  return (
    <thead className='table-header-group w-full sticky -top-[1px] z-[20] h-[48px] bg-white'>
      <tr className='table-row border-collapse border-hotel-100 dark:border-primary-500 w-full'>
        <Col
          className='w-[35%] text-left bg-hotel-75'
          title={t("HotelDetails.Availability.table.columns.accommodationType")}
        />
        <Col className='w-[5%] bg-hotel-75' title={t("HotelDetails.Availability.table.columns.sleep")} />
        <Col className='w-[20%] bg-hotel-600' title={t("HotelDetails.Availability.table.columns.priceAWeek")} arrow />
        <Col className='w-[35%] bg-hotel-75' title={t("HotelDetails.Availability.table.columns.choice")} />
        <Col
          className='min-w-[60px] bg-hotel-75'
          title={t("HotelDetails.Availability.table.columns.amount")}
          nowrap={false}
        />
      </tr>
    </thead>
  );
};

export default Head;
