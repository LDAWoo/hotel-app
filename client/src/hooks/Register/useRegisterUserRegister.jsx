import { create } from "zustand";

const useRegisterUserRegister = create((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirm: "",
  setField: (field, value) => set({ [field]: value }),
}));

export default useRegisterUserRegister;
