import { create } from "zustand";

const useRegisterModalReadMoreReview = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModalReadMoreReview;
