import { useState } from "react";
import Button from "../../../components/Buttons/Button";
import Operations from "./Operations";
import Settings from "./Settings";

const nav = [
  {
    title: "Operations",
  },
  {
    title: "Performance",
  },
  {
    title: "Settings",
  },
];

function TabProperties() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <ul className="list-none relative flex overflow-x-auto overflow-y-hidden" role="table">
        {nav.map((n, index) => (
          <li key={index} className="inline-block text-center">
            <Button title={n.title} onClick={() => setActiveIndex(index)} fontMedium className={`${activeIndex === index ? "text-hotel-75 before:content-[''] before:bg-hotel-75 before:-bottom-[1px] before:h-[2px] before:left-0 before:absolute before:right-0" : "hover:bg-gray-100"} p-4 relative w-full border-[3px] duration-200 border-transparent focus:border-hotel-75/50`} xl />
          </li>
        ))}
      </ul>
      {activeIndex === 0 && <Operations />}
      {activeIndex === 2 && <Settings />}
    </div>
  );
}

export default TabProperties;
