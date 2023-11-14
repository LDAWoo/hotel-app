import { TiLocation } from "react-icons/ti";
import Icon from "../Icon/Icon";
import ToolTip from "../ToolTip/ToolTip";
import CardBody from "../Modals/MapModal/CardBody";

const Marker = ({
  lat,
  lng,
  image,
  rating,
  name,
  days,
  adults,
  child,
  reviews,
  isActive,
}) => {
  return (
    <ToolTip
      width={380}
      typeToolTip='TippyHeadless'
      items={
        <CardBody
          name={name}
          rating={rating}
          image={image}
          days={days}
          adults={adults}
          child={child}
          reviews={reviews}
        />
      }
    >
      <div className='w-[28px] h-[34px]'>
        <div className='w-[28px] h-[34px] relative'>
          <div className='relative'>
            <div className='relative text-hotel-500 hover:text-hotel-50 cursor-pointer'>
              <div
                className={`absolute top-0 left-0 z-[2] ${
                  isActive ? "animate-bounce text-hotel-50" : ""
                }`}
              >
                <Icon icon={TiLocation} size={40} />
              </div>
              <svg
                className='bg-primary-700 absolute w-3 h-1 top-[36px] left-3 opacity-25 rounded-full'
                viewBox='0 0 12 4'
              >
                <ellipse cx='24' cy='5' rx='24' ry='5'></ellipse>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </ToolTip>
  );
};

export default Marker;
