import { create } from "zustand";

const useRegisterHotelName = create((set) => ({
  hotelName: "",
  errorHotelName: "",
  contactPerson: "",
  errorContactPerson: "",
  phoneNumberOne: "",
  errorPhoneNumberOne: "",
  phoneNumberTwo: "",
  errorPhoneNumberTwo: "",
  rating: 0,
  managerHotel: false,
  setField: (field, value) => {
    set((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  },

  resetAllHotelName: () => {
    set({
      hotelName: "",
      contactPerson: "",
      phoneNumberOne: "",
      phoneNumberTwo: "",
      rating: 0,
      managerHotel: false,
    });
  },
}));

export default useRegisterHotelName;
