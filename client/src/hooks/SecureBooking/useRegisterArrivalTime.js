import { create } from "zustand";

const useRegisterArrivalItem = create((set) => ({
  estimatedCheckInTime: "",
  setField: (field, value) => {
    set((prev) => ({
      ...prev,
      [field]: value,
    }));
  },
}));

export default useRegisterArrivalItem;
