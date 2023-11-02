import { useState } from "react";
import Icon from "../../../components/Icon/Icon";
import Title from "../../../components/Title/Title";
import IncreaseAndDecreaseValue from "../../../components/ValueIncreaseAndDecrease/IncreaseAndDecreaseValue";
import PropTypes from "prop-types";

function BedRoom({ data }) {
  const [rooms, setRooms] = useState(data);

  const handleMinus = (index) => {
    setRooms((prevData) => {
      const updateData = [...prevData];
      if (updateData[index].value > updateData[index].min) {
        updateData[index].value -= updateData[index].step;
      }
      return updateData;
    });
  };

  const handlePlus = (index) => {
    setRooms((prevData) => {
      const updateData = [...prevData];
      if (updateData[index].value < updateData[index].max) {
        updateData[index].value += updateData[index].step;
      }
      return updateData;
    });
  };
  return (
    <div className='flex flex-col gap-8 w-full'>
      {rooms &&
        rooms?.map((item, index) => (
          <div key={index} className='w-full h-[42px]'>
            <div className='flex items-center flex-row w-full h-full'>
              {item?.name && (
                <div className='flex flex-row items-center flex-1 gap-5 text-primary-100 dark:text-primary-50'>
                  <Icon icon={item?.icon} size={38} />
                  <div className='flex flex-col items-start'>
                    <Title
                      title={item?.name}
                      xxl
                      nowrap={false}
                      colorTitle={` ${
                        item?.value > 0
                          ? "font-medium text-primary-700 dark:text-white"
                          : ""
                      }`}
                    />
                    <Title title={item?.sizeBed} large nowrap={false} />
                  </div>
                </div>
              )}
              <IncreaseAndDecreaseValue
                value={item?.value}
                minValue={item?.min}
                maxValue={item?.max}
                step={item?.step}
                handleMinus={() => handleMinus(index)}
                handlePlus={() => handlePlus(index)}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

BedRoom.propTypes = {
  data: PropTypes.array,
};

export default BedRoom;
