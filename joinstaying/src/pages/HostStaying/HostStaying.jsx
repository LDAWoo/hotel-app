import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../components/Contexts/AppUserProvider";
import routesConfig from "../../configs/routesConfig";
import "./HostStaying.scss";
function HostStaying({ children }) {
  const navigate = useNavigate();
  const { user, userLoading } = useContext(UserContext);

  const params = [
    {
      id: 1,
      groupParam: [
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
      ],
    },
    {
      id: 2,
      groupParam: [
        {
          id: 1,
          param: routesConfig.becomeAHostCreateRoom,
        },
      ],
    },
    {
      id: 3,
      groupParam: [
        {
          id: 1,
          param: routesConfig.becomeAHostThankYou,
        },
      ],
    },
  ];

  useEffect(() => {
    if (!userLoading) {
      if (!Object.keys(user).length > 0) {
        navigate(routesConfig.home);
      }
    }
  }, [user, userLoading]);

  const location = useLocation();
  const currentPathName = location.pathname;

  const groupParamCurrent = params.find((param) => {
    return param.groupParam.some((group) => group.param === currentPathName);
  });

  const activeIndex = groupParamCurrent?.groupParam.findIndex((p) => p.param === currentPathName);

  const totalParams = groupParamCurrent?.groupParam.length;
  const percentage = (activeIndex + 1) * (100 / totalParams);

  return (
    <div className="flex flex-col w-full">
      {/* progress */}
      <div className="bg-[#dcdcdc] h-[8px] w-full flex-shrink-0 overflow-hidden m-0 p-0 rounded-0">
        <div className="relative h-[8px]">
          {/* complete */}
          <div className="absolute h-[8px] top-0 left-0 bg-hotel-50" style={{ width: `${percentage}%`, transition: "width 500ms" }}></div>

          {groupParamCurrent &&
            groupParamCurrent?.groupParam.map((_, index) => (
              <div
                key={index}
                style={{
                  left: `${(100 / totalParams) * index}%`,
                  width: `${100 / totalParams}%`,
                }}
                className={`absolute h-[8px] top-0 ${index > 0 ? "border-l-[2px]" : ""} border-white`}
              />
            ))}
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-center max-w-[var(--max-width)] mx-auto">
          <div className="flex flex-col gap-2 h-full w-full mx-auto my-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}

HostStaying.propTypes = {
  children: PropTypes.node,
};

export default HostStaying;
