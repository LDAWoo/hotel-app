import { create } from "zustand";

const useRegisterCreateRoom = create((set) => ({
  completeInformation: false,
  completeComposition: false,
  completeAmenities: false,
  completePhoto: false,
  completePolicies: false,
  completePayment: false,
  completeConfirm: false,
  setComplete: (field, value) =>
    set((prev) => ({
      ...prev,
      [field]: value,
    })),
}));

export default useRegisterCreateRoom;
