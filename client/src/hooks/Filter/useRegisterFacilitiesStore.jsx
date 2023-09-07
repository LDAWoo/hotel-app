import { create } from "zustand";

const useRegisterFacilitiesStore = create((set) => ({
  checkedItems: {},
  setCheckedItems: (name, checked) =>
    set((state) => ({
      checkedItems: { ...state.checkedItems, [name]: checked },
    })),
}));

export default useRegisterFacilitiesStore;
