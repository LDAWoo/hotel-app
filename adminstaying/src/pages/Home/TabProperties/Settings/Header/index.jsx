import { PiDownloadSimpleThin, PiEyeThin, PiPauseThin } from "react-icons/pi";
import TableDraggable from "../../../../../components/TableDraggable";
import Item from "../../../../../components/TableDraggable/Item";
import useRegisterDataSettings from "../../../../../hooks/Home/TabProperties/Settings/useRegisterDataSetting";

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
      { id: "genius", name: "Genius", sortBy: "genius", status: true },
      { id: "preferred", name: "Preferred", sortBy: "preferred", status: true },
      { id: "minimumStay", name: "Minimum stay", sortBy: "minimumStay", status: true },
      { id: "countryRates", name: "Country rates", sortBy: "countryRates", status: true },
      { id: "mobileRates", name: "Mobile rates", sortBy: "mobileRates", status: true },
      { id: "propertyScore", name: "Property page score", sortBy: "propertyScore  ", status: true },
    ],
    icon: PiPauseThin,
  },
  {
    id: "customize_view",
    title: "Customize view",
    menu: [
      { id: "location", name: "Show property location", status: true },
      { id: "properties", name: "Show closed properties", status: true },
    ],
    icon: PiEyeThin,
  },
];

function Header() {
  const { setItems, currentData, setCurrentData } = useRegisterDataSettings();

  return (
    <div className="flex justify-start 2md:justify-end mb-2">
      <TableDraggable initData={initData} setItems={setItems} currentData={currentData} setCurrentData={setCurrentData} component={Item} />
    </div>
  );
}

export default Header;
