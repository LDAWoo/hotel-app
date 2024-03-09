import { create } from "zustand";

const useRegisterAddToStay = create((set) => ({
  orderCar: false,
  orderTaxi: false,
  setField: (field, value) => {
    set((prev) => ({
      ...prev,
      [field]: value,
    }));
  },
}));

export default useRegisterAddToStay;
