const AreaLeft = ({ data }) => {
  return (
    <div className="absolute w-[70px] -left-[70px] h-[300px] ">
      <p className="w-full text-left absolute inline-block h-[12px] text-[10px] top-[0px] right-auto left-[10px]">(Room night)</p>
      <div className="absolute w-full h-[300px] lef-0 z-[1] top-[28px] text-[10px]">
        <svg className="overflow-hidden" width={70} height={300}>
          <g transform="translate(40.5,4.5)">
            <g transform="translate(0,0)" style={{ transformOrigin: "0px 0px" }}>
              {data &&
                data.map((item, index) => (
                  <g key={index} style={{ transform: `translate(0, ${index < 1 ? 246 : 246 - index * 22.5}px)`, transformOrigin: "0px 0px" }}>
                    <line />
                    <text x={-9} y={0}>
                      <tspan x={-9} dy={3}>
                        {item?.night}
                      </tspan>
                    </text>
                  </g>
                ))}
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AreaLeft;
