import { create } from "zustand";

const useRegisterConfirmHotel = create((set) => ({
  statusConfirm: [],

  setField: (field, value) =>
    set((prev) => ({
      ...prev,
      [field]: value,
    })),
}));

export default useRegisterConfirmHotel;
