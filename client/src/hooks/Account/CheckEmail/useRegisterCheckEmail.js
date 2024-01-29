import { create } from "zustand";

const useRegisterCheckEmail = create((set) => ({
  email: "",
  setCheckEmail: (newEmail) => set({ email: newEmail }),
}));

export default useRegisterCheckEmail;
