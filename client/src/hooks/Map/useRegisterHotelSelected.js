import { create } from "zustand";

const useRegisterHotelSelected = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),

  items: {},
  setItems: (newItem) => set({ items: newItem }),
}));

export default useRegisterHotelSelected;
