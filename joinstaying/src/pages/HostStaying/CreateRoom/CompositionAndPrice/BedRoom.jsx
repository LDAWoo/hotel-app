import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Title from "../../../../components/Title/Title";
import Icon from "../../../../components/Icon/Icon";
import IncreaseAndDecreaseValue from "../../../../components/ValueIncreaseAndDecrease/IncreaseAndDecreaseValue";
import useRegisterCompositionAndPrice from "../../../../hooks/JoinStaying/CreateRoom/CompositionAndPrice/useRegisterCompositionAndPrice";
import { useTranslation } from "react-i18next";

function BedRoom({ data }) {
  const [rooms, setRooms] = useState(data);
  const { setField } = useRegisterCompositionAndPrice();
  const { t } = useTranslation();
  const handleMinus = (index) => {
    setRooms((prevData) => {
      const updateData = prevData.map((room, idx) => {
        if (idx !== index) {
          return { ...room, value: 0 };
        } else {
          if (room.value === 1) {
            return room;
          } else if (room.value > room.min) {
            return { ...room, value: room.value - room.step };
          }
          return room;
        }
      });

      return updateData;
    });
  };

  const handlePlus = (index) => {
    setRooms((prevData) => {
      const updateData = prevData.map((room, idx) => {
        if (idx !== index) {
          return { ...room, value: 0 };
        } else if (room.value < room.max) {
          return { ...room, value: room.value + room.step };
        }
        return room;
      });
      return updateData;
    });
  };

  useEffect(() => {
    rooms.forEach((room) => {
      if (room.value > 0) {
        setField("bedName", room?.name);
        setField("maxOccupancy", room?.value);
      }
    });
  }, [rooms, setField]);

  return (
    <div className="flex flex-col gap-2 w-full">
      <Title title={t("HostStaying.CreateRoom.items.composition.information.bedOptions")} xl fontMedium />
      <div className="flex flex-col gap-8">
        {rooms &&
          rooms?.map((item, index) => (
            <div key={index} className="w-full h-[42px]">
              <div className="flex items-center flex-row w-full h-full">
                {item?.name && (
                  <div className="flex flex-row items-center flex-1 gap-5 text-primary-100 dark:text-primary-50">
                    <Icon icon={item?.icon} size={38} />
                    <div className="flex flex-col items-start">
                      <Title title={item?.name} xxl nowrap={false} className={`${item?.value > 0 ? "font-medium text-primary-700 dark:text-white" : ""}`} />
                      <Title title={item?.sizeBed} large nowrap={false} />
                    </div>
                  </div>
                )}
                <IncreaseAndDecreaseValue className="w-auto h-[40px]" value={item?.value} minValue={item?.min || item?.value === 1} maxValue={item?.max} step={item?.step} handleMinus={() => handleMinus(index)} handlePlus={() => handlePlus(index)} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

BedRoom.propTypes = {
  data: PropTypes.array,
};

export default BedRoom;
