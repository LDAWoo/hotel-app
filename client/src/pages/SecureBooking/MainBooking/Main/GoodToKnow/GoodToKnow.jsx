import Icon from "../../../../../components/Icon/Icon";
import Title from "../../../../../components/Title/Title";
import { CiCreditCardOff, CiCircleCheck, CiClock2 } from "react-icons/ci";
const items = [
  {
    icon: CiCreditCardOff,
    name: "No credit card needed!",
  },
  {
    icon: CiCircleCheck,
    name: "Stay flexible: You can cancel for free before 18:00 on 27 December 2023, so lock in this great price today.",
  },
  {
    icon: CiCircleCheck,
    name: "No payment is required to secure this booking. You'll pay during your stay.",
  },
  {
    icon: CiClock2,
    name: "You're booking the last available Double Room we have at Hotel.",
  },
];
function GoodToKnow() {
  return (
    <div className='flex flex-col gap-2'>
      <Title title='Good to know' extraLarge4 fontBold />
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
