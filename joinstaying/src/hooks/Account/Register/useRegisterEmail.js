import { create } from "zustand";

const useRegisterEmail = create((set) => ({
  currentEmail: "",
  setCurrentEmail: (newEmail) => set({ currentEmail: newEmail }),
}));

export default useRegisterEmail;
