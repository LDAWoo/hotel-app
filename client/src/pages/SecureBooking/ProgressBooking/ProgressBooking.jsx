import ItemProgress from "./ItemProgress";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../../../components/Title/Title";
import Icon from "../../../components/Icon/Icon";
import routesConfig from '../../../configs/routesConfig'
const items = [
  {
    id: "yourSelection",
    name: "Your Selection",
    step: 1,
    icon: IoCheckmarkSharp,
    complete: true,
    source: "selection"
  },
  {
    id: "yourDetail",
    name: "Your Details",
    step: 2,
    icon: IoCheckmarkSharp,
    complete: false,
    source: "details"
  },
  {
    id: "finalStep",
    name: "Final step",
    step: 3,
    icon: IoCheckmarkSharp,
    complete: false,
    source: "final"
  },
];

function ProgressBooking({currentSource}) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionToken = searchParams.get("token");
  const [flag, setFlag] = useState(false);
  const [currentSourceBooking, setCurrentSourceBooking] = useState("");
  const lastCompleteIndex = items
    .slice()
    .reverse()
    .findIndex((item) => item.complete);

    const lastIndex = lastCompleteIndex !== -1 ? items.length - 1 - lastCompleteIndex : -1;

  useEffect(() => {
    const [firstIncompleteItem] = items.filter((item) => item.complete);

    if (!firstIncompleteItem) {
      setCurrentSourceBooking(items[0].source);
      return;
    }

    if (!flag) {
      setCurrentSourceBooking(items[lastIndex + 1].source);
      setFlag(true);
    }
    
  }, [lastIndex, flag, currentSourceBooking]);

  useEffect(() => {
    navigate(`${routesConfig.secureBooking}${`?token=${sessionToken}&source=${currentSourceBooking}`}`);
  }, [navigate, currentSourceBooking, sessionToken]);

  const handleClick = (src,index) => {
    if (index - 1 > lastIndex) return;
    setCurrentSourceBooking(src);
  }
  return (
    <div className='flex w-full flex-row gap-2'>
      {items.map((item, index) => (
        <div key={index} className={`flex items-center gap-2 ${
          index !== items.length - 1 ? "flex-1" : "flex-grow-0"
        }`}>
            <div
                className={`flex items-center gap-2 ${
                  index !== items.length - 1 ? "flex-grow" : "flex-grow-0"
                }`}
              >
                <div className='item-center flex cursor-pointer' onClick={() => handleClick(item.source, index)}>
                  {item.complete ? (
                    <>
                      <Icon
                        icon={item?.icon}
                        classIcon='w-6 h-6 bg-hotel-50 rounded-full text-white justify-center flex items-center'
                      />
                    </>
                  ) : (
                    <>
                      <div
                        className={`w-6 h-6 ${
                          item.complete
                            ? "bg-hotel-50 text-white"
                            : "bg-transparent text-primary-700 border-[2px] border-primary-100 "
                        } rounded-full `}
                      >
                        <span className='items-center flex justify-center font-medium text-[14px]'>
                          {item?.step}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <Title title={item?.name} nowrap={false} xl fontBold />
                {index !== items.length - 1 && <span className='flex-1 bg-primary-500 h-[1px]' />}
              </div>
        </div>
      ))}
    </div>
  );
}

export default ProgressBooking;
