import { create } from "zustand";

const useRegisterHotelProperty = create((set) => ({
  propertiesValue: 0,
  setPropertiesValue: (newProperty) => set({ propertiesValue: newProperty }),
}));

export default useRegisterHotelProperty;
