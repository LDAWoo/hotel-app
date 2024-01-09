import { create } from "zustand";

const useRegisterDataHotelProperty = create((set) => ({
  properties: [],
  setProperties: (newProperty) => set({ properties: newProperty }),
}));

export default useRegisterDataHotelProperty;
