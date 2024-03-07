import { create } from "zustand";

const useRegisterPolicies = create((set) => ({
  bookingPolicy: "0 day",
  cancellationPolicy: "first_night",
  petPolicy: "yes",
  smokingPolicy: "no",
  additionalPolices: "",

  setField: (field, value) =>
    set((prev) => ({
      ...prev,
      [field]: value,
    })),
}));

export default useRegisterPolicies;
