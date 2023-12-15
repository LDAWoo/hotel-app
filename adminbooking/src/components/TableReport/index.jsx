import { useState } from "react";

function TableReport({ data, type }) {
  const [state, setState] = useState({
    value: "",
    x: 0,
    left: 0,
    position: 0,
    visible: false,
  });

  const { value, x, left, position, visible } = state;

  const handleChange = (e) => {
    console.log(e);
  };

  const handleMouseEnter = (v, x, p) => {
    setState((prev) => ({ ...prev, value: v, x: x + 50, left: x, position: p, visible: true }));
  };

  const handleMouseLeave = () => {
    setState((prev) => ({ ...prev, value: "", x: 0, visible: false }));
  };

  const dataLength = data.length;

  const width = data.length * 100;

  const getStyle = () => {
    if (position + 1 === dataLength) {
      return { right: `2px` };
    } else {
      return { left: `${left}px` };
    }
  };

  return (
    <div className="relative inline-block max-w-full" onMouseLeave={handleMouseLeave}>
      <div className="inline-block border-r border-l max-w-full overflow-x-auto overflow-y-hidden">
        <div>{/* left */}</div>
        <div>{/* right */}</div>

        <div className={`pt-[300px] h-[1px] relative overflow-hidden`} style={{ width: `${width}px` }}>
          <div className="max-h-[300px] relative -top-[250px] h-[300px]" style={{ width: `${width}px` }}>
            <svg className="overflow-hidden -ml-[39px] text-[10px] bg-transparent" width={width} height={300}>
              <g transform="translate(20.5,4.5)">
                <g className="visible">
                  <g className="" style={{ transformOrigin: "0px 0px" }}>
                    <line className={`stroke-[1px] stroke-[#aaa] fill-none ${visible ? "visible" : "invisible"}`} x1={x} x2={x} y1={0} y2={246} />
                  </g>
                </g>

                <g className="" style={{ transformOrigin: "0px 0px" }}>
                  <g style={{ transformOrigin: "0px 0px" }}></g>
                  <g style={{ transformOrigin: "0px 0px" }}>
                    {data.map((item, index) => (
                      <>
                        <circle className="stroke-[2px] stroke-[#ef6c0a] fill-[#ef6c0a]" key={index} cx={index === 0 ? 50 : index * 100 + 50} r={2.5} cy={246} />
                        <line className="stroke-[3px] stroke-[#ef6c0a] fill-[#ef6c0a]" x1={index === 0 ? 50 : index * 100 + 50} x2={index * 100 + 150} y1={246} y2={246} />
                      </>
                    ))}
                  </g>
                </g>
                <g className="" style={{ fillOpacity: 0 }}>
                  {data.map((item, index) => (
                    <rect key={index} x={index === 0 ? index : index * 100} y={0} width={100} height={246} onMouseEnter={() => handleMouseEnter(item, index === 0 ? index : index * 100, index)} onChange={handleChange} />
                  ))}
                </g>
              </g>
            </svg>
            <div className={`absolute -top-[47px] pointer-events-none ${visible ? "block" : "hidden"}`} style={{ ...getStyle() }}>
              <table className="w-full table z-[10] border-collapse bg-white shadow-[7px_7px_12px_-9px_#777] opacity-90">
                <tbody>
                  <tr className="border  table-row">
                    <th className="bg-[#aaa] text-[14px] pt-[2px] pb-[2px] pl-[5px] pr-[5px] text-left text-white" colSpan={2}>
                      {type === "weeks" ? value?.start + " - " + value?.end : value}
                    </th>
                  </tr>
                  <tr className="border table-row">
                    <td className="text-[13px] bg-white pt-[3px] pb-[3px] pl-[6px] pr-[6px] border border-dotted">
                      <span className="bg-[#0896ff] inline-block w-[10px] h-[10px] mr-[6px] text-[13px]"></span>
                      Room night
                    </td>
                    <td className="text-[13px] bg-white pt-[3px] pb-[3px] pl-[6px] pr-[6px] border border-dotted">0</td>
                  </tr>
                  <tr className="border table-row">
                    <td className="text-[13px] bg-white pt-[3px] pb-[3px] pl-[6px] pr-[6px] border border-dotted">
                      <span className="bg-[#EF6c0a] inline-block w-[10px] h-[10px] mr-[6px] text-[13px]"></span>
                      Average daily rate in VND
                    </td>
                    <td className="text-[13px] bg-white pt-[3px] pb-[3px] pl-[6px] pr-[6px] border border-dotted">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
          </div>
        </div>
        <div></div>
        <table className="table table-fixed text-[11px] whitespace-nowrap" style={{ width: `${width}px` }}>
          <thead>
            <tr>
              <th className="w-0 bg-[#f1f1f1] h-0"></th>
              {data.map((row, index) => (
                <th key={index} className=" h-[28px] whitespace-nowrap align-middle bg-[#f1f1f1] pt-[35px] pb-[5px] pl-auto pr-auto text-left text-[11px] font-medium">
                  {type === "weeks" && (
                    <div>
                      {row?.start} - {row?.end.substring(0, 2)}
                      <br />
                      {row?.end.substring(2)}
                    </div>
                  )}
                  {type === "days" && (
                    <div>
                      {row?.substring(0, 3)} <br />
                      {row?.substring(3)}
                    </div>
                  )}
                  {type === "months" && <div>{row}</div>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table-row-group">
            <tr className="table-row">
              <th className="absolute w-auto bg-transparent left-0 mt-[10px] pl-4 font-normal text-[11px]">Room night</th>
              {data.map((row, index) => (
                <td key={index} className=" whitespace-nowrap align-middle bg-white pt-[35px] pb-[5px] pr-[33.25px] pl-[33.2px] text-left text-[11px] font-medium">
                  <div>-</div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableReport;
