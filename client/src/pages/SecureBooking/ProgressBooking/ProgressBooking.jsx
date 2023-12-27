import ItemProgress from "./ItemProgress";
import { IoCheckmarkSharp } from "react-icons/io5";

const items = [
  {
    id: "yourSelection",
    name: "Your Selection",
    step: 1,
    icon: IoCheckmarkSharp,
  },
  {
    id: "yourDetail",
    name: "Your Details",
    step: 2,
    icon: IoCheckmarkSharp,
  },
  {
    id: "finalStep",
    name: "Final step",
    step: 3,
    icon: IoCheckmarkSharp,
  },
];

function ProgressBooking() {
  return (
    <div className='flex w-full flex-row gap-2'>
      {items.map((item, index) => (
        <ItemProgress
          key={index}
          item={item}
          success={index === 0}
          line={items.length - 1 !== index}
        />
      ))}
    </div>
  );
}

export default ProgressBooking;
