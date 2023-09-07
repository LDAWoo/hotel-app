import { create } from "zustand";
const useRegisterPropertyRatingStore = create((set) => ({
  checkedItems: {},
  setCheckedItems: (name, checked) =>
    set((state) => ({
      checkedItems: { ...state.checkedItems, [name]: checked },
    })),
}));

export default useRegisterPropertyRatingStore;
