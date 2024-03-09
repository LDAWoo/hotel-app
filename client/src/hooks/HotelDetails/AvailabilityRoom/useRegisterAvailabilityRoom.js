import { create } from "zustand";

const useRegisterAvailabilityRoom = create((set) => ({
  rooms: [],
  setRooms: (newRooms) => set({ rooms: newRooms }),
}));

export default useRegisterAvailabilityRoom;
