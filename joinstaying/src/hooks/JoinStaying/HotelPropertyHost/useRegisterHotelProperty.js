import { create } from "zustand";

const useRegisterHotelProperty = create((set) => ({
  propertiesValue: "",
  setPropertiesValue: (newProperty) => set({ propertiesValue: newProperty }),
}));

export default useRegisterHotelProperty;
