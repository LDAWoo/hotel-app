import { create } from "zustand";

const useRegisterFacilities = create((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
  facilities: [],
  setFacilities: (newFacilities) => set({ facilities: newFacilities }),
}));

export default useRegisterFacilities;
