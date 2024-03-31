import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PiTaxi } from "react-icons/pi";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import Icon from "../../../../../components/Icon/Icon";
import Title from "../../../../../components/Title/Title";
import useRegisterAddToStay from "../../../../../hooks/SecureBooking/useRegisterAddToStay";
import PropTypes from 'prop-types'

function AddToStay({data}) {
  const { orderCar, orderTaxi, pickUpService, setField } = useRegisterAddToStay();
  const {t} = useTranslation();

  useEffect(() => {
    if(data){
      const keysToCheck = ["orderCar", "orderTaxi","pickUpService"];
      keysToCheck.forEach((key) => {
          setField(key, data[key]);
      });
    }
  },[data])

  const items = [
    {
      id: "interested_car_rentals",
      title: t("Secure.Details.AddToYourStay.items.item1"),
      subTitle: t("Secure.Details.AddToYourStay.items.item2"),
      icon: PiTaxi,
      type: "orderCar",
      isChecked: orderCar,
    },
    {
      id: "interested_taxi",
      title: t("Secure.Details.AddToYourStay.items.item3"),
      subTitle: t("Secure.Details.AddToYourStay.items.item4"),
      icon: PiTaxi,
      type: "orderTaxi",
      isChecked: orderTaxi,
    },
    {
      id: "interested_pick_up_service",
      title: t("Secure.Details.AddToYourStay.items.item5"),
      subTitle: t("Secure.Details.AddToYourStay.items.item6"),
      icon: PiTaxi,
      type: "pickUpService",
      isChecked: pickUpService,
    }
  ];

  const handleChecked = (type, checked) => {
    setField(type, !checked);
  };

  return (
    <div className='flex flex-col gap-2'>
      <Title title={t("Secure.Details.AddToYourStay.title")} fontBold extraLarge4 />

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

AddToStay.propTypes = {
  data: PropTypes.object
}

export default AddToStay;
