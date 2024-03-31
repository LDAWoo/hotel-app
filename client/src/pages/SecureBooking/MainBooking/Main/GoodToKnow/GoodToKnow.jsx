import { useTranslation } from "react-i18next";
import Icon from "../../../../../components/Icon/Icon";
import Title from "../../../../../components/Title/Title";
import { CiCreditCardOff, CiCircleCheck, CiClock2 } from "react-icons/ci";

function GoodToKnow() {
  const {t} = useTranslation();

  const items = [
    {
      icon: CiCreditCardOff,
      name: t("Secure.Details.GoodToKnow.items.item1"),
    },
    {
      icon: CiCircleCheck,
      name: t("Secure.Details.GoodToKnow.items.item2"),
    },
    {
      icon: CiCircleCheck,
      name: t("Secure.Details.GoodToKnow.items.item3"),
    },
    {
      icon: CiClock2,
      name: t("Secure.Details.GoodToKnow.items.item4"),
    },
  ];

  return (
    <div className='flex flex-col gap-2'>
      <Title title={t("Secure.Details.GoodToKnow.title")} extraLarge4 fontBold />
      <div className='flex flex-col gap-2'>
        {items.map((item, index) => (
          <div key={index} className='flex flex-row gap-2 items-start'>
            <Icon icon={item?.icon} size={22} classIcon='text-success-50' />
            <Title title={item?.name} xl nowrap={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoodToKnow;
