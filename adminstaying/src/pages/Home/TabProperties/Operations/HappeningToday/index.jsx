import Title from "../../../../../components/Title/Title";
import Card from "../Card";
import { BsMenuApp } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { SlClose, SlStar } from "react-icons/sl";
const items = [
  {
    title: "Reservations",
    url: "/reservations",
    icon: BsMenuApp,
    value: 0,
  },
  {
    title: "Arrivals",
    url: "/arrivals",
    icon: CiLogout,
    value: 0,
  },
  {
    title: "Departures",
    url: "/departures",
    icon: IoIosLogOut,
    value: 0,
  },
  {
    title: "Reviews",
    url: "/reviews",
    icon: SlStar,
    value: 0,
  },
  {
    title: "Cancellations",
    url: "/cancellations",
    icon: SlClose,
    value: 0,
  },
];
function HappeningToday() {
  return (
    <div className="mb-2">
      <Title title="Happening today" fontBold xxxl />
      <div className="bg-white border text-primary-700 flex p-4 rounded-[2px]">
        <div className="max-w-full flex-grow">
          <div className="flex box-border flex-wrap list-none clear-both">
            {items.map((item, index) => (
              <Card key={index} item={item} maxSize={items.length} position={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HappeningToday;
