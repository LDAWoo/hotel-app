import { create } from "zustand";


const useRegisterBookingConfirm = create((set) => ({
    bookings: [],
    booking: {},
    setBookings: (newBookings) => set({ bookings: newBookings }),
    setBooking: (newBooking) => set({ booking: newBooking }),
  }));
  
  export default useRegisterBookingConfirm;