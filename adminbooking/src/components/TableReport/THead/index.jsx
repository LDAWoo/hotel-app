function THead({ data, dataStaying, type, show, position, handleMouseEnter }) {
  return (
    <thead>
      <tr className="table-row">
        <th className="w-0 bg-transparent h-0 cursor-default"></th>
        {data.length > 0 &&
          data.map((row, index) => {
            const exits = dataStaying.filter((d) => {
              const dateA = new Date(d?.date);
              const dateB = type === "weeks" ? new Date(row?.start) : new Date(row);

              dateA.setHours(0, 0, 0, 0);
              dateB.setHours(0, 0, 0, 0);

              return dateA.getTime() === dateB.getTime();
            });

            return (
              <th key={index} className={`table-cell h-[28px] max-w-[96px] whitespace-nowrap align-middle bg-[#F0F0F0] pt-[35px] pb-[5px] pl-[0px] pr-auto text-center text-[11px] font-medium duration-200 ${position === index ? "bg-[#F3F3F3]" : ""}`} onMouseEnter={() => handleMouseEnter(row, exits[0]?.night, exits[0]?.money, index === 0 ? index : index * 96, index)}>
                {type === "weeks" && (
                  <div className="inline-block">
                    {row?.start && row?.start} - {row?.end && row?.end.substring(0, 2)}
                    <br />
                    {row?.end && row?.end.substring(2)}
                  </div>
                )}
                {type === "days" && (
                  <div className="inline-block">
                    {row.length > 0 && row?.substring(0, 3)} <br />
                    {row.length > 0 && row?.substring(3)}
                  </div>
                )}
                {type === "months" && <div className="inline-block">{row.length > 0 && row}</div>}
              </th>
            );
          })}
        <th className={`${show ? "table-cell" : "hidden"} absolute z-[1] right-0 w-[100px] h-[265px] -mt-[15px] bg-hotel-75 rounded-[4px] shadow-[0_0_0_1px_rgba(0,102,204,1),0_0_12px_0_rgba(0,102,204,0.7)] text-white pt-[35px] pb-[5px] pl-4 pr-0 text-left text-[11px]`}>Total</th>
      </tr>
    </thead>
  );
}

export default THead;
