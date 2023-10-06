import PropTypes from "prop-types";

function HostStaying({ children }) {
  const params = [
    {
      id: 1,
      param: "category",
    },
    {
      id: 2,
      param: "property",
    },
    {
      id: 3,
      param: "owner",
    },
    {
      id: 4,
      param: "feedback",
    },
  ];

  const totalParams = params.length;
  const percentage = 100 / totalParams;

  return (
    <div className='flex flex-col w-full'>
      {/* progress */}
      <div className='bg-[#dcdcdc] h-[8px] w-full flex-shrink-0 overflow-hidden m-0 p-0 rounded-0'>
        <div className='relative h-[8px]'>
          {/* complete */}
          <div
            className='absolute h-[8px] top-0 left-0 bg-hotel-50'
            style={{ width: "25%" }}
          ></div>

          {params.map((param, index) => (
            <div
              key={index}
              style={{
                left: `${percentage * index}%`,
                width: `${100 / params.length}%`,
              }}
              className='absolute h-[8px] top-0 border-l-[2px] border-white'
            ></div>
          ))}
        </div>
      </div>
      <div className='w-full'>
        <div className='w-full flex justify-center max-w-[var(--max-width)] mx-auto'>
          <div className='flex flex-col gap-2 h-full w-full mx-auto my-auto'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

HostStaying.propTypes = {
  children: PropTypes.node,
};

export default HostStaying;
