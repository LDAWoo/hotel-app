import { create } from "zustand";

const useRegisterAddToStay = create((set) => ({
  orderCar: false,
  orderTaxi: false,
  pickUpService: false,
  setField: (field, value) => {
    set((prev) => ({
      ...prev,
      [field]: value,
    }));
  },
}));

export default useRegisterAddToStay;
