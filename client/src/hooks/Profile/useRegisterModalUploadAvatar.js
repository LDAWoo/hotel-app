import { create } from "zustand";

const useRegisterModalUploadAvatar = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModalUploadAvatar;
