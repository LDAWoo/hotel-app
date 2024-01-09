import { create } from "zustand";

const useRegisterFacilities = create((set) => ({
  facilities: [],
  setFacilities: (newFacilities) => set({ facilities: newFacilities }),
}));

export default useRegisterFacilities;
