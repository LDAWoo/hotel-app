import { create } from "zustand";

const useRegisterContactDetails = create((set) => ({
  currentFirstName: "",
  currentLastName: "",
  currentPhoneNumber: "",

  setContactDetails: (field, value) => set({ [field]: value }),
}));

export default useRegisterContactDetails;
