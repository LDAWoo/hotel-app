import { create } from "zustand";

const useRegisterHotelPriceValue = create((set) =>({
    value: '',
    setValue: (newValue) => set({value: newValue})
}))

export default useRegisterHotelPriceValue;