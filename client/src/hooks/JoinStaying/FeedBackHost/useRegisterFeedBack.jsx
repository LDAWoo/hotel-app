import { create } from "zustand";

const useRegisterFeedBack = create((set) => ({
  valueFeedBack: "",
  setValueFeedBack: (newValue) => set({ valueFeedBack: newValue }),
}));

export default useRegisterFeedBack;
