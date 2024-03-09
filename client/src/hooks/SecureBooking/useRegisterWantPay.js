import { create } from "zustand";

const useRegisterWantPay = create((set) => ({
    receiveMarketingEmail: false,
  setField: (field, value) => {
    set((prev) => ({
      ...prev,
      [field]: value,
    }));
  },
}));

export default useRegisterWantPay;