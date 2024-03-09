import { create } from "zustand";

const useRegisterControl = create((set) => ({
  bookingForMe: true,
  businessTravel: false,
  electronicConfirm: true,
  setField: (field, value) => set((prev) => ({ ...prev, [field]: value })),
}));

export default useRegisterControl;
