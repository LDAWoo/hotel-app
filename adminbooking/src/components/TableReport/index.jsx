import { useState } from "react";
import Table from "./Table";

function TableReport({ data, type, items }) {
  const [state, setState] = useState({
    stateData: {
      key: "",
      value: [],
    },

    x: 0,
    left: 0,
    position: 0,
    visible: false,
  });
  const [showTotal, setShowTotal] = useState(false);

  const handleMouseLeave = () => {
    setState((prev) => ({ ...prev, stateData: { key: "", value: [] }, x: 0, position: -1, visible: false }));
  };

  const dataStaying = [
    {
      id: "1",
      night: 11,
      money: 700000,
      date: "2023-12-03",
    },
    {
      id: "2",
      night: 4,
      money: 1000000,
      date: "2023-12-06",
    },
    {
      id: "3",
      night: 5,
      money: 5000000,
      date: "2023-07-31",
    },
    {
      id: "4",
      night: 2,
      money: 2100000,
      date: "2023-08-01",
    },
    {
      id: "5",
      night: 10,
      money: 20000000,
      date: "2023-12-18",
    },
    {
      id: "6",
      night: 1,
      money: 6000000,
      date: "2023-07-30",
    },
    {
      id: "7",
      night: 7,
      money: 8000000,
      date: "2023-08-02",
    },
    {
      id: "8",
      night: 2,
      money: 4000000,
      date: "2023-08-03",
    },
  ];

  const dataRow = [
    { value: "roomNight", name: "Room night" },
    { value: "roomRevenue", name: "Room revenue in VND" },
    { value: "roomAverage", name: "Average daily rate in VND" },
  ];

  let maxMoney = dataStaying.reduce((max, item) => Math.max(max, item.money), 0);
  let maxNight = dataStaying.reduce((max, item) => Math.max(max, item.night), 0);
  maxMoney = Math.ceil(maxMoney / 2) * 2;
  maxNight = Math.ceil(maxNight / 2) * 2;

  const fraction = 0.1;

  const stepMoney = maxMoney * fraction;
  const stepNight = maxNight * fraction;

  const moneys = Array.from({ length: Math.ceil(maxMoney / stepMoney + 2) }, (_, index) => {
    let money = (index - 1) * stepMoney;
    return { money: money, rectHeight: 225 - (((index - 1) * stepMoney) / maxMoney) * 225 };
  });
  const nights = Array.from({ length: Math.ceil(maxNight / stepNight + 1) }, (_, index) => ({ night: (index * stepNight).toFixed(1), rectHeight: 225 - ((index * stepNight) / maxNight) * 225 }));

  const options = [
    {
      moneys,
      nights,
    },
  ];

  return (
    <div className="relative inline-block max-w-full" onMouseLeave={handleMouseLeave}>
      <div className={`scroll-smooth inline-block border-r border-l max-w-full overflow-x-auto overflow-y-hidden ${showTotal ? "pr-[100px]" : "pr-0"} duration-500`}>
        <Table dataRow={dataRow} data={data} dataStaying={dataStaying} items={items} type={type} setState={setState} state={state} options={options} stepMoney={stepMoney} stepNight={stepNight} showTotal={showTotal} setShowTotal={setShowTotal} />
      </div>
    </div>
  );
}

export default TableReport;
