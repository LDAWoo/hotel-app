import { create } from "zustand";

const useRegisterSpecialRequests = create((set) => ({
  specialRequirements: "",
  setField: (field, value) => {
    set((prev) => ({
      ...prev,
      [field]: value,
    }));
  },
}));

export default useRegisterSpecialRequests;
