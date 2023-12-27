import { create } from "zustand";

const useRegisterControl = create((set) => ({
  accepted: [],
  bookingFor: false,
  travellingForWork: false,
  setField: (field, value) => set((prev) => ({ ...prev, [field]: value })),
}));

export default useRegisterControl;
