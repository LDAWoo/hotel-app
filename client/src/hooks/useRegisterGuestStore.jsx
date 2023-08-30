import { create } from "zustand";

const useRegisterGuestStore = create((set) => ({
  adult: 1,
  child: 0,
  rooms: 1,
  setAdult: (adult) => set({ adult }),
  setChildren: (child) => set({ child }),
  setRooms: (rooms) => set({ rooms }),
}));

export default useRegisterGuestStore;
