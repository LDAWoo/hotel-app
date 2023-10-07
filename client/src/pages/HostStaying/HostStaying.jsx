import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import routesConfig from "../../configs/routesConfig";
import "./HostStaying.scss";
function HostStaying({ children }) {
  const params = [
    {
      id: 1,
      param: routesConfig.becomeAHostCategory,
    },
    {
      id: 2,
      param: routesConfig.becomeAHostProperty,
    },
    {
      id: 3,
      param: routesConfig.becomeAHostOwner,
    },
    {
      id: 4,
      param: routesConfig.becomeAHostFeedBack,
    },
    {
      id: 5,
      param: routesConfig.becomeAHostAddRess,
    },
    {
      id: 6,
      param: routesConfig.becomeAHostMap,
    },
    {
      id: 7,
      param: routesConfig.becomeAHostHotelName,
    },
  ];

  const location = useLocation();
  const currentPathName = location.pathname;

  const activeIndex = params.findIndex((param) =>
    currentPathName.startsWith(param.param),
  );

  const totalParams = params.length;
  const percentage = (activeIndex + 1) * (100 / totalParams);

  return (
    <div className='flex flex-col w-full'>
      {/* progress */}
      <div className='bg-[#dcdcdc] h-[8px] w-full flex-shrink-0 overflow-hidden m-0 p-0 rounded-0'>
        <div className='relative h-[8px]'>
          {/* complete */}
          <div
            className='absolute h-[8px] top-0 left-0 bg-hotel-50'
            style={{ width: `${percentage}%`, transition: "width 500ms" }}
          ></div>

          {params.map((param, index) => (
            <div
              key={index}
              style={{
                left: `${(100 / totalParams) * index}%`,
                width: `${100 / totalParams}%`,
              }}
              className={`absolute h-[8px] top-0 ${
                index > 0 ? "border-l-[2px]" : ""
              } border-white`}
            />
          ))}
        </div>
      </div>
      <div className='w-full'>
        <div className='w-full flex justify-center max-w-[var(--max-width)] mx-auto'>
          <div className='flex flex-col gap-2 h-full w-full mx-auto my-auto'>
            {params.map((param, index) => (
              <CSSTransition
                key={index}
                in={activeIndex === index}
                timeout={500}
                classNames={activeIndex > index ? "slide-out" : "slide-in"}
                unmountOnExit
              >
                {children}
              </CSSTransition>
            ))}
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
