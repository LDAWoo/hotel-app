import { create } from "zustand";

const useRegisterAddRess = create((set) => ({
  country: "",
  streetAddress: "",
  districtAddress: "",
  city: "",
  postalCode: "",
  data: {
    streetAddress: "",
    districtAddress: "",
    city: "",
    postalCode: "",
  },
  setField: (field, value) => {
    set((prevState) => ({
      ...prevState,
      [field]: value,
      data: {
        ...prevState.data,
        [field]: value,
      },
    }));
  },
}));

export default useRegisterAddRess;
