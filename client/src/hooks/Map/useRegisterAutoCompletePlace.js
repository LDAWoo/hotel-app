import { create } from "zustand";

const useRegisterAutoCompletePlace = create((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useRegisterAutoCompletePlace;