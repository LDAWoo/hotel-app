import { create } from "zustand";

const useRegisterSecureBooking = create((set) => ({
  data: {},
  setData: (newData) => set({ data: newData }),
}));

export default useRegisterSecureBooking;
