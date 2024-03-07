import { create } from "zustand";

const useRegisterAddRess = create((set) => ({
  country: "",
  streetAddress: "",
  errorStreetAddress: "",
  districtAddress: "",
  errorDistrictAddress: "",
  city: "",
  errorCity: "",
  postalCode: "",
  errorPostalCode: "",

  setField: (field, value) => {
    set((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  },

  resetAllAddress: () => {
    set({
      country: "",
      streetAddress: "",
      districtAddress: "",
      city: "",
      postalCode: "",
    });
  },
}));

export default useRegisterAddRess;
