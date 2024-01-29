import { create } from "zustand";

const useRegisterAddRoom = create((set) => ({
  roomTypes: [],
  setRoomTypes: (type) => set({ roomTypes: type }),
  roomType: "",
  setRoomType: (type) => set({ roomType: type }),
  quantityRoom: 0,
  setQuantityRoom: (quantity) => set({ quantityRoom: quantity }),
  roomArea: 0,
  setRoomArea: (area) => set({ roomArea: area }),
}));

export default useRegisterAddRoom;
