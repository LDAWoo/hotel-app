import SelectInput from "../../../../../components/SelectInput/SelectInput";
import Title from "../../../../../components/Title/Title";
import useRegisterArrivalItem from "../../../../../hooks/SecureBooking/useRegisterArrivalTime";

const YourArrival = () => {
  const data = [
    {
      name: "Please select",
      value: "",
    },
    {
      name: "04:00 AM - 05:00 AM",
      value: "04:00 AM - 05:00 AM",
    },
    {
      name: "05:00 AM - 06:00 AM",
      value: "05:00 AM - 06:00 AM",
    },
    {
      name: "06:00 AM - 07:00 AM",
      value: "06:00 AM - 07:00 AM",
    },
    {
      name: "07:00 AM - 08:00 AM",
      value: "07:00 AM - 08:00 AM",
    },
    {
      name: "08:00 AM - 09:00 AM",
      value: "08:00 AM - 09:00 AM",
    },
    {
      name: "09:00 AM - 10:00 AM",
      value: "09:00 AM - 10:00 AM",
    },
    {
      name: "10:00 AM - 11:00 AM",
      value: "10:00 AM - 11:00 PM",
    },
    {
      name: "11:00 AM - 12:00 PM",
      value: "11:00 AM - 12:00 PM",
    },
    {
      name: "12:00 PM - 01:00 PM",
      value: "12:00 PM - 01:00 PM",
    },
    {
      name: "01:00 PM - 02:00 PM",
      value: "01:00 PM - 02:00 PM",
    },
    {
      name: "02:00 PM - 03:00 PM",
      value: "02:00 PM - 03:00 PM",
    },
    {
      name: "03:00 PM - 04:00 PM",
      value: "03:00 PM - 04:00 PM",
    },
    {
      name: "04:00 PM - 05:00 PM",
      value: "04:00 PM - 05:00 PM",
    },
    {
      name: "05:00 PM - 06:00 PM",
      value: "05:00 PM - 06:00 PM",
    },
    {
      name: "06:00 PM - 07:00 PM",
      value: "06:00 PM - 07:00 PM",
    },
    {
      name: "07:00 PM - 08:00 PM",
      value: "07:00 PM - 08:00 PM",
    },
    {
      name: "08:00 PM - 09:00 PM",
      value: "08:00 PM - 09:00 PM",
    },
    {
      name: "09:00 PM - 10:00 PM",
      value: "09:00 PM - 10:00 PM",
    },
    {
      name: "10:00 PM - 11:00 PM",
      value: "10:00 PM - 11:00 PM",
    },
    {
      name: "11:00 PM - 12:00 AM",
      value: "11:00 PM - 12:00 AM",
    },
    {
      name: "12:00 AM - 01:00 AM (the next day)",
      value: "12:00 AM - 01:00 AM (the next day)",
    },
    {
      name: "01:00 AM - 02:00 AM (the next day)",
      value: "01:00 AM - 02:00 AM (the next day)",
    },
  ];

  const { estimatedCheckInTime, setField } = useRegisterArrivalItem();

  const handleChange = (e) => {
    const value = e.target.value;
    setField("estimatedCheckInTime", value);
  };
  return (
    <div className='flex flex-col gap-2'>
      <Title title='Your arrival time' fontBold extraLarge4 />

      <div className='flex flex-row gap-1'>
        <Title
          title='Add your estimated arrival time.'
          fontBold
          xl
          nowrap={false}
        />
        <Title title='(optional)' xl nowrap={false} />
      </div>

      <div>
        <SelectInput
          value={estimatedCheckInTime}
          onChange={handleChange}
          className='h-[36px] rounded-md focus:shadow-[0_0_0_1px_rgba(0,13,194,.76)] mb-[0px]'
        >
          {data.map((time, index) => (
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

YourArrival.propTypes = {};

export default YourArrival;
