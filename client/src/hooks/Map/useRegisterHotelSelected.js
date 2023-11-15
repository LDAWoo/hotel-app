import { create } from "zustand";

const useRegisterHotelSelected = create((set) => ({
  isOpen: false,
  onOpen: (data) => set({ isOpen: true, items: { ...data } }),
  onClose: () => set({ isOpen: false }),

  items: {
    id: "",
    image: "",
    rating: 0,
    name: "",
    days: 1,
    adults: 1,
    child: 0,
    reviews: 0,
  },
}));

export default useRegisterHotelSelected;
