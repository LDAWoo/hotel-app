import { create } from "zustand";

const useRegisterBookingConfirmModal = create((set) => ({
  isOpen: false,
  bookingModal: {},
  setBookingModal: (newBooking) => set({bookingModal: newBooking}),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterBookingConfirmModal;
