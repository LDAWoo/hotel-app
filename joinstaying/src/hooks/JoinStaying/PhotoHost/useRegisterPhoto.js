import { create } from "zustand";

const useRegisterPhoto = create((set) => ({
  photos: [],
  images: [],

  setField: (field, value) =>
    set((prev) => ({
      ...prev,
      [field]: value,
    })),
}));

export default useRegisterPhoto;
