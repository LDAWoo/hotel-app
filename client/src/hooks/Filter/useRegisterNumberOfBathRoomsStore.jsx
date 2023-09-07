import { create } from "zustand";

const useRegisterNumberOfBathRoomsStore = create((set) => ({
  rooms: 0,
  setRooms: (rooms) => set({ rooms }),
}));

export default useRegisterNumberOfBathRoomsStore;
