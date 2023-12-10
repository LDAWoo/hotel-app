import { PiDownloadSimpleThin, PiEyeThin, PiPauseThin } from "react-icons/pi";
import TableDraggable from "../../../../../../components/TableDraggable";
import useRegisterDataProperties from "../../../../../../hooks/Home/TabProperties/Operations/useRegisterDataProperties";
import Item from "../../../../../../components/TableDraggable/Item";

const initData = [
  {
    id: "download",
    title: "Download",
    icon: PiDownloadSimpleThin,
    menu: [],
  },
  {
    id: "customize_data",
    title: "Customize data",
    menu: [
      { id: "statusOnStaying", name: "Status on Staying", sortBy: "statusOnStaying", status: true },
      { id: "arrivals", name: "Arrivals in next 48 hours", sortBy: "arrivals", status: true },
      { id: "departures", name: "Departures in next 48 hours", sortBy: "departures", status: true },
      { id: "guestMessages", name: "Guest message", sortBy: "guestMessages", status: true },
      { id: "stayingMessage", name: "Staying.com message", sortBy: "stayingMessage", status: true },
    ],
    icon: PiPauseThin,
  },
  {
    id: "customize_view",
    title: "Customize view",
    menu: [{ id: "location", name: "Show property location", status: true }],
    icon: PiEyeThin,
  },
];

function OptionRight() {
  const { setItems, currentData, setCurrentData } = useRegisterDataProperties();

  return <TableDraggable initData={initData} setItems={setItems} currentData={currentData} setCurrentData={setCurrentData} component={Item} />;
}

export default OptionRight;
