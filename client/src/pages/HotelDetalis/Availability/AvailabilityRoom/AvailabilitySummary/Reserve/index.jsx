import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { startBookingSessionOne } from "../../../../../../api/Booking";
import Button from "../../../../../../components/Buttons/Button";
import { UserContext } from "../../../../../../components/Contexts/AppUserProvider";
import routesConfig from "../../../../../../configs/routesConfig";
import useRegisterAvailabilityRoom from "../../../../../../hooks/HotelDetails/AvailabilityRoom/useRegisterAvailabilityRoom";
import useRegisterHotelDetails from "../../../../../../hooks/HotelDetails/useRegisterHotelDetails";
import setCookie from "../../../../../../hooks/useRegisterSetCookie";

const Reserve = ({ toolTip }) => {
  const ButtonReserver = () => {
    const { hotels } = useRegisterHotelDetails();
    const [loading, setLoading] = useState(false);
    const { rooms } = useRegisterAvailabilityRoom();
    const {t} = useTranslation()
    const handleReserve = async () => {

      const convertRoom = rooms.map((room) => ({
        roomId: room.roomId,
        quantityRoom: 1,
      }));

      const data = {
        hotelId: hotels.hotelId,
        checkInDate: hotels.checkInDate,
        checkOutDate: hotels.checkOutDate,
        quantityRoom: hotels.quantityRoom,
        quantityAdult: hotels.adults,
        quantityChildren: hotels.children,
        location: hotels.city,
        roomInfoRequests: convertRoom,
      };

      try {
        setLoading(true);
        const response = await startBookingSessionOne(data);
        setCookie("tokenBooking", response.jwtToken);
        setLoading(false);
        window.open(`${routesConfig.secureBooking}?token=${response.jwtToken}`);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };

    return (
      <Button
        title={t("HotelDetails.Reserve")}
        fontMedium
        large
        className='pt-[6px] pb-[6px] justify-center flex items-center w-full'
        classTitle='text-white'
        background
        onClick={handleReserve}
        disabled={rooms.length === 0 || loading}
        loading={loading}
      />
    );
  };

  return (
    <div>
      {toolTip ? (
        // <ToolTipMoving toolTip={<Content />}>
        <ButtonReserver />
      ) : (
        // </ToolTipMoving>
        <ButtonReserver />
      )}
    </div>
  );
};

Reserve.propTypes = {
  toolTip: PropTypes.bool,
};

export default Reserve;
