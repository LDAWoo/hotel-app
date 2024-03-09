import { PiTaxi } from "react-icons/pi";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import Icon from "../../../../../components/Icon/Icon";
import Title from "../../../../../components/Title/Title";
import useRegisterAddToStay from "../../../../../hooks/SecureBooking/useRegisterAddToStay";

function AddToStay() {
  const { orderCar, orderTaxi, setField } = useRegisterAddToStay();

  const items = [
    {
      id: "interested_car_rentals",
      value: 0,
      title: "I'm interested in renting a car",
      subTitle:
        "Make the most out of your trip and check car hire options in your booking confirmation.",
      icon: PiTaxi,
      type: "orderCar",
      isChecked: orderCar,
    },
    {
      id: "interested_taxi",
      value: 1,
      title: "Want to book a taxi or shuttle ride in advance?",
      subTitle:
        "Avoid surprises - get from the airport to your accommodation without a hitch. We'll add taxi options to your booking confirmation.",
      icon: PiTaxi,
      type: "orderTaxi",
      isChecked: orderTaxi,
    },
  ];

  const handleChecked = (type, checked) => {
    setField(type, !checked);
  };

  return (
    <div className='flex flex-col gap-2'>
      <Title title='Add to your stay' fontBold extraLarge4 />

      <ul className='list-none flex flex-col'>
        {items.map((item, index) => (
          <div key={index} className='flex flex-col gap-0'>
            <li className='flex flex-row items-center'>
              <Checkbox
                title={item?.title}
                name={item?.id}
                checked={item?.isChecked}
                onChange={() => handleChecked(item?.type, item?.isChecked)}
                value={item?.id}
              />
              <Icon icon={item?.icon} size={32} />
            </li>
            <Title
              className='ml-[26px]'
              title={item?.subTitle}
              large
              nowrap={false}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AddToStay;
