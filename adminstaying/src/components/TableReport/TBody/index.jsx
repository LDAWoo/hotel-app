function TBody({ data = [], dataStaying = [], dataRow = [], position, type, show, handleMouseEnter }) {
  return (
    <tbody className="table-row-group">
      {dataRow.map((row, index) => (
        <tr className="table-row border-b-[1px] border-primary-50" key={index}>
          <th className="absolute w-0 bg-transparent left-0 mt-[10px] pl-4 font-normal text-[11px]">{row?.name}</th>
          {data &&
            data.map((cell, index) => {
              const exits = dataStaying.filter((d) => {
                const dateA = new Date(d?.date);
                dateA.setHours(0, 0, 0, 0);
                if (type === "weeks") {
                  const dateBStart = new Date(cell?.start);
                  const dateBEnd = new Date(cell?.end);

                  dateBStart.setHours(0, 0, 0, 0);
                  dateBEnd.setHours(0, 0, 0, 0);
                  return dateA >= dateBStart && dateA <= dateBEnd;
                }

                if (type === "months") {
                  const dateB = new Date(cell);
                  const startOfMonth = new Date(dateB.getFullYear(), dateB.getMonth(), 1);
                  const endOfMonth = new Date(dateB.getFullYear(), dateB.getMonth() + 1, 0);
                  startOfMonth.setHours(0, 0, 0, 0);
                  endOfMonth.setHours(0, 0, 0, 0);
                  return dateA >= startOfMonth && dateA <= endOfMonth;
                }

                const dateB = new Date(cell);

                dateA.setHours(0, 0, 0, 0);
                dateB.setHours(0, 0, 0, 0);

                return dateA.getTime() === dateB.getTime();
              });
              const totalNight = exits.reduce((total, item) => total + item.night, 0);
              const totalMoney = exits.reduce((total, item) => total + item.money, 0);
              const totalRoomAverage = totalNight * totalMoney;
              return (
                <td key={index} className={`whitespace-nowrap align-middle bg-white pt-[35px] pb-[5px] text-center text-[11px] font-medium duration-200 ${position === index ? "bg-[#F3F3F3]" : ""}`} onMouseEnter={() => handleMouseEnter(cell, totalNight, totalMoney, index === 0 ? index : index * 96, index)}>
                  <div>
                    {exits.length > 0 ? (
                      <>
                        {row?.value === "roomNight" && totalNight}
                        {row?.value === "roomRevenue" && totalMoney}
                        {row?.value === "roomAverage" && totalRoomAverage}
                      </>
                    ) : (
                      "-"
                    )}
                  </div>
                </td>
              );
            })}
          <td className={`${show ? "table-cell" : "hidden"} absolute z-[1] right-0 w-[100px] border-l border-l-[#06c] bg-white pt-[35px] pb-[5px] pl-4 pr-0 text-left text-[11px]`}>-</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;
