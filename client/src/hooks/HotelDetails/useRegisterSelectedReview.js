import { create } from "zustand";

const useRegisterSelectedReview = create((set) => ({
  selectedReview: {},
  setSelectedReview: (newReview) => set({ selectedReview: newReview }),
}));

export default useRegisterSelectedReview;
