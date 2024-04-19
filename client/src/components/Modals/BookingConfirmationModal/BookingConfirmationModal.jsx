import { useTranslation } from "react-i18next";
import Modals from "../Modals";
import useRegisterBookingConfirmModal from "../../../hooks/Booking/useRegisterBookingConfirmModal";
import Body from "./Body";



function BookingConfirmationModal() {
    const {t} = useTranslation();
    const {isOpen,onClose,bookingModal} = useRegisterBookingConfirmModal()

    return (
        <Modals
          isOpen={isOpen}
          title={`${bookingModal?.fullName}, ${t("BookingConfirm.showYourBookingIn")} ${bookingModal?.hotel?.city}`}
          onClose={onClose}
          body={<Body isOpen={isOpen} data={bookingModal}/>}
          hAuto
        />
      );
}

export default BookingConfirmationModal;