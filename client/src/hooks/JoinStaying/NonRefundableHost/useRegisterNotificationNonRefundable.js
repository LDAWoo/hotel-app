import { create } from "zustand";

const useRegisterNotificationNonRefundable = create((set) =>({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useRegisterNotificationNonRefundable;