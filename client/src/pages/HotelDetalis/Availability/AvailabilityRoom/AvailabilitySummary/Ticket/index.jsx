import { useTranslation } from "react-i18next";


const Ticket = () => {

  const {t} = useTranslation()

  const tickets = [
    {
      id: 1,
      name: t("HotelDetails.Availability.table.summary.items.item1"),
    },
    {
      id: 2,
      name: t("HotelDetails.Availability.table.summary.items.item2"),
    },
    {
      id: 3,
      name: t("HotelDetails.Availability.table.summary.items.item3"),
    },
  ];

  return (
    <div>
      <ul className='block list-disc ml-3 dark:text-primary-700'>
        {tickets.map((item, index) => (
          <li
            key={index}
            className='list-item text-[12px] mb-[2px] dark:text-primary-700'
          >
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ticket;
