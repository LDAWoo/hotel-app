import React, { memo, useCallback, useState } from "react";
import Icon from "../../Icon/Icon";
import AreaLeft from "../AreaLeft";
import AreaRight from "../AreaRight";
import TBody from "../TBody";
import THead from "../THead";
import ToolTip from "../ToolTip";
import { CiViewTable } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

function Table({ data, items, dataRow, dataStaying, options, type, stepMoney, stepNight, showTotal, setShowTotal, state, setState }) {
  const dataLength = data?.length;
  const width = data?.length * 96;

  const handleMouseEnter = useCallback((k, v1, v2, x, p) => {
    setState((prev) => ({ ...prev, stateData: { key: k, value: [v1, v2] }, x: x + 55, left: x, position: p, visible: true }));
  }, []);

  const handleShowTotal = () => {
    setShowTotal(!showTotal);
  };

  console.log(1);
  return (
    <>
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
                            return night >= parseFloat(o.night) && night < parseFloat(o.night) + stepNight;
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

                    const rectHeight = exits.length > 0 ? options[0].moneys.find((o) => exits[0].money >= o.money && exits[0].money < o.money + stepMoney)?.rectHeight : 225;

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

                      nextRectHeight = nextExits.length > 0 ? options[0].moneys.find((o) => nextExits[0].money >= o.money && nextExits[0].money < o.money + stepMoney)?.rectHeight : 225;
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
                    const rectHeight = exits.length > 0 ? options[0].moneys.find((o) => exits[0].money >= o.money && exits[0].money < o.money + stepMoney)?.rectHeight : 225;
                    return (
                      <>
                        <circle className={`${state?.position === index ? "stroke-[4px]" : "stroke-[2px]"} stroke-[#ef6c0a] fill-[#ef6c0a]`} key={index} cx={index === 0 ? 55 : index * 96 + 55} r={2.5} cy={rectHeight}></circle>
                      </>
                    );
                  })}
                </g>
              </g>

              <g className="visible">
                <g className="" style={{ transformOrigin: "0px 0px" }}>
                  <line className={`stroke-[1px] stroke-[#aaa] fill-none ${state?.visible ? "visible" : "invisible"}`} x1={state?.x} x2={state?.x} y1={0} y2={246} />
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
          <ToolTip items={items} type={type} stateData={state?.stateData} visible={state?.visible} left={state?.left} dataLength={dataLength} position={state?.position} />
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
        <TBody dataRow={dataRow} data={data} type={type} dataStaying={dataStaying} position={state?.position} show={showTotal} handleMouseEnter={handleMouseEnter} />
      </table>
    </>
  );
}

export default React.memo(Table);
