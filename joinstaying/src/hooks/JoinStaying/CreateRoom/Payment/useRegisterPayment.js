import { create } from "zustand";

const useRegisterPayment = create((set) => ({
  creditOrDebitCard: false,
  firstName: "",
  errorFirstName: "",
  lastName: "",
  errorLastName: "",
  flagReceivingAddress: false,
  country: "",
  streetAddress: "",
  errorStreetAddress: "",
  districtAddress: "",
  errorDistrictAddress: "",
  city: "",
  errorCity: "",

  setField: (field, value) =>
    set((prev) => ({
      ...prev,
      [field]: value,
    })),
}));

export default useRegisterPayment;
