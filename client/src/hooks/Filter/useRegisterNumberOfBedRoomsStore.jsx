import { create } from "zustand";

const useRegisterNumberOfBedRoomsStore = create((set) => ({
  rooms: 0,
  setRooms: (rooms) => set({ rooms }),
}));

export default useRegisterNumberOfBedRoomsStore;
