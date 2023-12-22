import { useCallback, useState } from "react";
import { CiViewTable } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import Icon from "../Icon/Icon";
import AreaLeft from "./AreaLeft";
import AreaRight from "./AreaRight";
import TBody from "./TBody";
import ToolTip from "./ToolTip";
import THead from "./THead";

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

  const { stateData, x, left, position, visible } = state;

  const handleMouseEnter = useCallback((k, v1, v2, x, p) => {
    setState((prev) => ({ ...prev, stateData: { key: k, value: [v1, v2] }, x: x + 55, left: x, position: p, visible: true }));
  }, []);

  const handleMouseLeave = () => {
    setState((prev) => ({ ...prev, stateData: { key: "", value: [] }, x: 0, position: -1, visible: false }));
  };

  const dataLength = data.length;

  const width = data.length * 96;

  const handleShowTotal = () => {
    setShowTotal(!showTotal);
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

  const step1 = maxMoney * fraction;
  const step2 = maxNight * fraction;

  const moneys = Array.from({ length: Math.ceil(maxMoney / step1 + 2) }, (_, index) => {
    let money = (index - 1) * step1;
    return { money: money, rectHeight: 225 - (((index - 1) * step1) / maxMoney) * 225 };
  });
  const nights = Array.from({ length: Math.ceil(maxNight / step2 + 1) }, (_, index) => ({ night: (index * step2).toFixed(1), rectHeight: 225 - ((index * step2) / maxNight) * 225 }));
  const options = [
    {
      moneys,
      nights,
    },
  ];

  return (
    <div className="relative inline-block max-w-full" onMouseLeave={handleMouseLeave}>
      <div className={`inline-block border-r border-l max-w-full overflow-x-auto overflow-y-hidden ${showTotal ? "pr-[100px]" : "pr-0"} duration-500`}>
        <AreaLeft data={options[0]?.nights} />
        <AreaRight data={options[0]?.moneys} />

        <div className={`pt-[300px] h-[1px] relative overflow-hidden`} style={{ width: `${width}px` }}>
          <div className="max-h-[300px] relative -top-[250px] h-[300px]" style={{ width: `${width}px` }}>
            <svg className="overflow-hidden text-[10px] bg-transparent" width={width} height={300}>
              <g transform="translate(0,4.5)">
                <g className="" style={{ transformOrigin: "0px 0px" }}>
                  <g style={{ transformOrigin: "0px 0px" }}></g>
                  <g transform="translate(0,0)">
                    {data.map((item, index) => {
                      const exits = dataStaying.filter((d) => {
                        const dateA = new Date(d?.date);
                        const dateB = type === "weeks" ? new Date(item.start) : new Date(item);

                        dateA.setHours(0, 0, 0, 0);
                        dateB.setHours(0, 0, 0, 0);

                        return dateA.getTime() === dateB.getTime();
                      });
                      const start = 12;
                      const mX = index === 0 ? start : start * 8 * index + start;
                      const oY = 246;
                      const lX1 = mX;

                      const lX2 = index === 0 ? 100 : 96 * index + 100;

                      const lX3 = lX2;
                      const lY3 = oY;
                      const rectHeight =
                        exits.length > 0
                          ? options[0].nights.find((o) => {
                              const night = parseFloat(exits[0]?.night);
                              return night >= parseFloat(o.night) && night < parseFloat(o.night) + step2;
                            })?.rectHeight
                          : 246;
                      return <path key={index} d={`M ${mX},${oY} L${lX1},${rectHeight} L${lX2},${rectHeight} L${lX3},${lY3} z`} fill="rgb(18,150,255)" />;
                    })}
                  </g>
                  <g transform="translate(0,0)">
                    {data.map((item, index) => {
                      const exits = dataStaying.filter((d) => {
                        const dateA = new Date(d?.date);
                        const dateB = type === "weeks" ? new Date(item.start) : new Date(item);

                        dateA.setHours(0, 0, 0, 0);
                        dateB.setHours(0, 0, 0, 0);

                        return dateA.getTime() === dateB.getTime();
                      });

                      const rectHeight = exits.length > 0 ? options[0].moneys.find((o) => exits[0].money >= o.money && exits[0].money < o.money + step1)?.rectHeight : 225;

                      let nextRectHeight = 225;

                      const nextIndex = index + 1;
                      if (nextIndex < dataLength) {
                        const nextExits = dataStaying.filter((d) => {
                          const nextDateA = new Date(d?.date);
                          const nextDateB = type === "weeks" ? new Date(data[nextIndex].start) : new Date(data[nextIndex]);
                          nextDateA.setHours(0, 0, 0, 0);
                          nextDateB.setHours(0, 0, 0, 0);

                          return nextDateA.getTime() === nextDateB.getTime();
                        });

                        nextRectHeight = nextExits.length > 0 ? options[0].moneys.find((o) => nextExits[0].money >= o.money && nextExits[0].money < o.money + step1)?.rectHeight : 225;
                      }

                      return nextRectHeight !== null && <line className="stroke-[3px] stroke-[#ef6c0a] fill-[#ef6c0a]" x1={index === 0 ? 55 : index * 96 + 55} x2={(index + 1) * 96 + 55} y1={rectHeight} y2={nextRectHeight} key={index} />;
                    })}
                  </g>
                  <g style={{ transformOrigin: "0px 0px" }}>
                    {data.map((item, index) => {
                      const exits = dataStaying.filter((d) => {
                        const dateA = new Date(d?.date);
                        const dateB = type === "weeks" ? new Date(item.start) : new Date(item);
                        dateA.setHours(0, 0, 0, 0);
                        dateB.setHours(0, 0, 0, 0);

                        return dateA.getTime() === dateB.getTime();
                      });
                      const rectHeight = exits.length > 0 ? options[0].moneys.find((o) => exits[0].money >= o.money && exits[0].money < o.money + step1)?.rectHeight : 225;
                      return (
                        <>
                          <circle className={`${position === index ? "stroke-[4px]" : "stroke-[2px]"} stroke-[#ef6c0a] fill-[#ef6c0a]`} key={index} cx={index === 0 ? 55 : index * 96 + 55} r={2.5} cy={rectHeight}></circle>
                        </>
                      );
                    })}
                  </g>
                </g>

                <g className="visible">
                  <g className="" style={{ transformOrigin: "0px 0px" }}>
                    <line className={`stroke-[1px] stroke-[#aaa] fill-none ${visible ? "visible" : "invisible"}`} x1={x} x2={x} y1={0} y2={246} />
                  </g>
                </g>

                <g className="translate-x-0 translate-y-0" style={{ fillOpacity: 0 }}>
                  {data.map((item, index) => {
                    const exits = dataStaying.filter((d) => {
                      const dateA = new Date(d?.date);
                      const dateB = type === "weeks" ? new Date(item?.start) : new Date(item);

                      dateA.setHours(0, 0, 0, 0);
                      dateB.setHours(0, 0, 0, 0);

                      return dateA.getTime() === dateB.getTime();
                    });

                    const totalNight = exits.reduce((total, item) => total + item.night, 0);
                    const totalMoney = exits.reduce((total, item) => total + item.money, 0);

                    return <rect key={index} x={index === 0 ? index : index * 96} y={0} width={96} height={246} onMouseEnter={() => handleMouseEnter(item, totalNight, totalMoney, index === 0 ? index : index * 96, index)} />;
                  })}
                </g>
              </g>
            </svg>
            <ToolTip items={items} type={type} stateData={stateData} visible={visible} left={left} dataLength={dataLength} position={position} />
            <div></div>
          </div>
        </div>
        <div onClick={handleShowTotal} className={`absolute text-white top-[370px] left-full  ${showTotal ? "bg-[#3CB3E7] pl-5" : "bg-hotel-75"} rounded-tr-[4px] rounded-br-[4px] shadow-[2px_0_5px_rgba(0,0,0,0.5)inset] cursor-pointer duration-500 ease-in-out p-3`}>
          <Icon icon={CiViewTable} size={18} />
          <span className="inline-block uppercase mt-[2px] text-[8px] cursor-pointer">Total</span>
          <Icon classIcon={`absolute top-[35%] -right-[0px] ${showTotal ? "scale-100" : "scale-0"} duration-500`} icon={IoIosClose} size={18} />
        </div>
        <table className={`ml-[6px] table table-fixed text-[11px] whitespace-nowrap`} style={{ width: `${showTotal ? width + 96 : width}px` }}>
          <THead data={data} dataStaying={dataStaying} type={type} show={showTotal} handleMouseEnter={handleMouseEnter} />
          <TBody dataRow={dataRow} data={data} type={type} dataStaying={dataStaying} position={position} show={showTotal} handleMouseEnter={handleMouseEnter} />
        </table>
      </div>
    </div>
  );
}

export default TableReport;
