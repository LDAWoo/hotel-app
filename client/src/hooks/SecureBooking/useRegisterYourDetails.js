import { create } from "zustand";

const useRegisterYourDetails = create((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  phoneNumber: {
    number: "",
    countryCode: "VN",
    countryValue: "84",
  },
  setField: (id, value) => {
    set((prev) => ({
      ...prev,
      [id]: value,
    }));
  },
}));

export default useRegisterYourDetails;
