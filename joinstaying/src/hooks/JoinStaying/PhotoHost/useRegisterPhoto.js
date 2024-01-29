import { create } from "zustand";

const useRegisterPhoto = create((set) => ({
  photos: [],
  setPhotos: (newPhoto) => set({ photos: newPhoto }),
}));

export default useRegisterPhoto;
