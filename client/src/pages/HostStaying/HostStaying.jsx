import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import routesConfig from "../../configs/routesConfig";
import "./HostStaying.scss";
import { useEffect, useState } from "react";
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
    {
      id: 8,
      param: routesConfig.becomeAHostFacilities,
    },
    {
      id: 9,
      param: routesConfig.becomeAHostHouseRules,
    },
    {
      id: 10,
      param: routesConfig.becomeAHostOverviewRoom,
    },
    {
      id: 11,
      param: routesConfig.becomeAHostAddRoom,
    },
    {
      id: 12,
      param: routesConfig.becomeAHostBathRoom,
    },
    {
      id: 13,
      param: routesConfig.becomeAHostAmenities,
    },
    {
      id: 14,
      param: routesConfig.becomeAHostUnitName,
    },
    {
      id: 15,
      param: routesConfig.becomeAHostHotelPrice,
    },
    {
      id: 16,
      param: routesConfig.becomeAHostHotelPriceOverview,
    },
    {
      id: 17,
      param: routesConfig.becomeAHostHotelGroupDiscount,
    },
    {
      id: 18,
      param: routesConfig.becomeAHostHotelPolicy,
    },
    {
      id: 19,
      param: routesConfig.becomeAHostNonRefundable,
    },
    {
      id: 20,
      param: routesConfig.becomeAHostCalendarSync,
    },
    {
      id: 21,
      param: routesConfig.becomeAHostPaymentMode,
    },
    {
      id: 22,
      param: routesConfig.becomeAHostPhoto,
    },
  ];

  const location = useLocation();
  const currentPathName = location.pathname;

  const activeIndex = params.findIndex((param) =>
    currentPathName.startsWith(param.param),
  );

  const totalParams = params.length;
  const percentage = (activeIndex + 1) * (100 / totalParams);

  const [slideOut, setSlideOut] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideOut("-translate-x-full");
    setTimeout(() => {
      setSlideOut("translate-x-0");
    }, 500);
  }, [activeIndex]);

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
                className={activeIndex > index ? "slide-out" : "slide-in"}
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
