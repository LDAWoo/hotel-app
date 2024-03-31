import { useTranslation } from "react-i18next";
import SelectInput from "../../../../../components/SelectInput/SelectInput";
import Title from "../../../../../components/Title/Title";
import useRegisterArrivalItem from "../../../../../hooks/SecureBooking/useRegisterArrivalTime";
import { useEffect } from "react";
import PropTypes from 'prop-types'

const YourArrival = ({data}) => {
  const {t} = useTranslation();
  const { estimatedCheckInTime, setField } = useRegisterArrivalItem();

  useEffect(() => {
    if(data){
      const keysToCheck = ["estimatedCheckInTime"];
      keysToCheck.forEach((key) => {
        if(data[key] != null){
          setField(key, data[key]);
        }
      });
    }
  },[data])

  const items = [
    {
      name: t("Secure.Details.YourArrivalTime.pleaseSelect"),
      value: "",
    },
    {
      name: `04:00 ${t("times.am")} - 05:00 ${t("times.am")}`,
      value: "04:00 AM - 05:00 AM",
    },
    {
      name: `05:00 ${t("times.am")} - 06:00 ${t("times.am")}`,
      value: "05:00 AM - 06:00 AM",
    },
    {
      name: `06:00 ${t("times.am")} - 07:00 ${t("times.am")}`,
      value: "06:00 AM - 07:00 AM",
    },
    {
      name: `07:00 ${t("times.am")} - 08:00 ${t("times.am")}`,
      value: "07:00 AM - 08:00 AM",
    },
    {
      name: `08:00 ${t("times.am")} - 09:00 ${t("times.am")}`,
      value: "08:00 AM - 09:00 AM",
    },
    {
      name: `09:00 ${t("times.am")} - 10:00 ${t("times.am")}`,
      value: "09:00 AM - 10:00 AM",
    },
    {
      name: `10:00 ${t("times.am")} - 11:00 ${t("times.am")}`,
      value: "10:00 AM - 11:00 PM",
    },
    {
      name: `11:00 ${t("times.am")} - 12:00 ${t("times.pm")}`,
      value: "11:00 AM - 12:00 PM",
    },
    {
      name: `12:00 ${t("times.pm")} - 01:00 ${t("times.pm")}`,
      value: "12:00 PM - 01:00 PM",
    },
    {
      name: `01:00 ${t("times.pm")} - 02:00 ${t("times.pm")}`,
      value: "01:00 PM - 02:00 PM",
    },
    {
      name: `02:00 ${t("times.pm")} - 03:00 ${t("times.pm")}`,
      value: "02:00 PM - 03:00 PM",
    },
    {
      name: `03:00 ${t("times.pm")} - 04:00 ${t("times.pm")}`,
      value: "03:00 PM - 04:00 PM",
    },
    {
      name: `04:00 ${t("times.pm")} - 05:00 ${t("times.pm")}`,
      value: "04:00 PM - 05:00 PM",
    },
    {
      name: `05:00 ${t("times.pm")} - 06:00 ${t("times.pm")}`,
      value: "05:00 PM - 06:00 PM",
    },
    {
      name: `06:00 ${t("times.pm")} - 07:00 ${t("times.pm")}`,
      value: "06:00 PM - 07:00 PM",
    },
    {
      name: `07:00 ${t("times.pm")} - 08:00 ${t("times.pm")}`,
      value: "07:00 PM - 08:00 PM",
    },
    {
      name: `08:00 ${t("times.pm")} - 09:00 ${t("times.pm")}`,
      value: "08:00 PM - 09:00 PM",
    },
    {
      name: `09:00 ${t("times.pm")} - 10:00 ${t("times.pm")}`,
      value: "09:00 PM - 10:00 PM",
    },
    {
      name: `10:00 ${t("times.pm")} - 11:00 ${t("times.pm")}`,
      value: "10:00 PM - 11:00 PM",
    },
    {
      name: `11:00 ${t("times.pm")} - 12:00 ${t("times.am")}`,
      value: "11:00 PM - 12:00 AM",
    },
    {
      name: `12:00 ${t("times.am")} - 01:00 ${t("times.am")} (${t("Secure.Details.YourArrivalTime.theNextDay")})`,
      value: "12:00 AM - 01:00 AM (the next day)",
    },
    {
      name: `01:00 ${t("times.am")} - 02:00 ${t("times.am")} (${t("Secure.Details.YourArrivalTime.theNextDay")})`,
      value: "01:00 AM - 02:00 AM (the next day)",
    },
  ];


  const handleChange = (e) => {
    const value = e.target.value;
    setField("estimatedCheckInTime", value);
  };
  return (
    <div className='flex flex-col gap-2'>
      <Title title={t("Secure.Details.YourArrivalTime.title")} fontBold extraLarge4 />

      <div className='flex flex-row gap-1'>
        <Title
          title={t("Secure.Details.YourArrivalTime.subTitle")}
          fontBold
          xl
          nowrap={false}
        />
        <Title title={t("Secure.Details.YourArrivalTime.optional")} xl nowrap={false} />
      </div>

      <div>
        <SelectInput
          value={estimatedCheckInTime}
          onChange={handleChange}
          className='h-[36px] rounded-md focus:shadow-[0_0_0_1px_rgba(0,13,194,.76)] mb-[0px]'
        >
          {items.map((time, index) => (
            <option
              key={index}
              value={time.value}
              className='text-[14px] text-primary-700 dark:text-white'
            >
              {time.name}
            </option>
          ))}
        </SelectInput>
      </div>
    </div>
  );
};

YourArrival.propTypes = {
  data: PropTypes.object
};

export default YourArrival;
