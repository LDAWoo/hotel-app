import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { addNewRoom } from "../../../../api/HostStaying/AddRoomHost";
import Button from "../../../../components/Buttons/Button";
import { UserContext } from "../../../../components/Contexts/AppUserProvider";
import Title from "../../../../components/Title/Title";
import routesConfig from "../../../../configs/routesConfig";
import useRegisterCreateRoom from "../../../../hooks/JoinStaying/CreateRoom/useRegisterCreateRoom";
import { useTranslation } from "react-i18next";

const CurrentRoom = ({ room = {}, loading, setLoading, handleAddNewRoom, handleEdit, handleDelete }) => {
  const { token, sessionToken } = useContext(UserContext);
  const { setComplete } = useRegisterCreateRoom();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleSaveContinue = async () => {
    const data = {
      roomTypeId: room?.roomType,
      pricePerNight: room?.pricePerNight,
      roomName: room?.roomName,
      roomNameCustom: room?.nameCustom,
      quantityRoom: room?.quantityRoom,
      roomArea: room?.roomArea,
      maxOccupancy: room?.maxOccupancy,
      bedName: room?.bedName,
    };

    try {
      setLoading(true);
      await addNewRoom(data, token, sessionToken);
      setLoading(false);
      setComplete("completeComposition", true);
      navigate(`${routesConfig.becomeAHostCreateRoom}${`?token=${sessionToken}&source=amenities`}`);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <>
      {Object.keys(room).length > 0 && (
        <div className="flex flex-col gap-1 w-full bg-white border p-4">
          <div className="flex flex-row justify-between w-full items-center">
            <Title title={room?.roomName || `${t("HostStaying.CreateRoom.items.composition.information.roomNameDefault")}`} fontBold xl nowrap={false} />

            <div className="flex flex-row items-center gap-1">
              <Title title={t("HostStaying.CreateRoom.items.composition.information.quantityType")} xl nowrap={false} />
              <Title title={room?.quantityRoom || 0} xl fontBold />
            </div>

            <div className="flex flex-row items-center">
              <Button title={t("HostStaying.CreateRoom.items.composition.information.edit")} onClick={handleEdit} fontMedium xl classTitle="text-hotel-50 hover:text-hotel-200 hover:underline duration-200" />
              <Button title={t("HostStaying.CreateRoom.items.composition.information.delete")} onClick={handleDelete} fontMedium xl classTitle="text-hotel-50 hover:text-hotel-200 hover:underline duration-200" />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-row w-full">
        <div className="w-[60%]"></div>
        <div className="flex flex-row justify-end gap-2 w-full">
          {Object.keys(room).length === 0 && <Button title={t("HostStaying.CreateRoom.items.composition.information.buttonAddOrderRoom")} onClick={handleAddNewRoom} xl border className="pt-2 pb-2 w-full justify-center" />}
          <Button title={t("HostStaying.buttonContinue")} onClick={handleSaveContinue} disabled={Object.keys(room).length === 0 || loading} xl background className="pt-2 pb-2 w-full justify-center" />
        </div>
      </div>
    </>
  );
};

CurrentRoom.propTypes = {
  room: PropTypes.shape({
    roomType: PropTypes.string.isRequired,
    pricePerNight: PropTypes.number.isRequired,
    roomName: PropTypes.string.isRequired,
    nameCustom: PropTypes.string.isRequired,
    quantityRoom: PropTypes.number.isRequired,
    roomArea: PropTypes.number.isRequired,
    maxOccupancy: PropTypes.number.isRequired,
    bedName: PropTypes.string.isRequired,
  }),
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  handleAddNewRoom: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default CurrentRoom;
