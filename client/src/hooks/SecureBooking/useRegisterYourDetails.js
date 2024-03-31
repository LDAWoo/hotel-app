import { create } from "zustand";

const useRegisterYourDetails = create((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  phoneNumber: "",
  validation: false,
  setField: (id, value) => {
    set((prev) => ({
      ...prev,
      [id]: value,
    }));
  },
}));

export default useRegisterYourDetails;
