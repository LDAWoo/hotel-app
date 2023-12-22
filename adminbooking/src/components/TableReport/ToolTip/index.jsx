function ToolTip({ items, type, stateData, visible, position, left, dataLength }) {
  const getStyle = () => {
    if (position + 1 === dataLength) {
      return { right: `3px` };
    } else {
      return { left: `${left}px` };
    }
  };
  return (
    <div className={`absolute -top-[47px] pointer-events-none ${visible ? "block" : "hidden"}`} style={{ ...getStyle() }}>
      <table className="w-full table z-[10] border-collapse bg-white shadow-[7px_7px_12px_-9px_#777] opacity-90">
        <tbody>
          <tr className="border  table-row">
            <th className="bg-[#aaa] text-[14px] pt-[2px] pb-[2px] pl-[5px] pr-[5px] text-left text-white" colSpan={2}>
              {type === "weeks" ? stateData.key?.start + " - " + stateData.key?.end : stateData.key}
            </th>
          </tr>
          {items.map((item, index) => (
            <tr key={index} className="border table-row">
              <td className="text-[13px] bg-white pt-[3px] pb-[3px] pl-[6px] pr-[6px] border border-dotted">
                <span className={`${item?.color} inline-block w-[10px] h-[10px] mr-[6px] text-[13px]`}></span>
                {item?.name}
              </td>
              <td className="text-[13px] bg-white pt-[3px] pb-[3px] pl-[6px] pr-[6px] border border-dotted">{stateData.value[index] ? stateData.value[index] : 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToolTip;
