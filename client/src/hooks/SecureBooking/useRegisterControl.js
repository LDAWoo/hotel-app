import { create } from "zustand";

const useRegisterControl = create((set) => ({
  bookingForMe: true,
  businessTravel: true,
  electronicConfirm: true,
  setField: (field, value) => set((prev) => ({ ...prev, [field]: value })),
}));

export default useRegisterControl;
