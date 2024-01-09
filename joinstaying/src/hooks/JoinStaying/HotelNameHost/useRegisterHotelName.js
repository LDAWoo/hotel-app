import { create } from "zustand";

const useRegisterHotelName = create((set) => ({
  hotelName: "",
  contactPerson: "",
  phoneNumberOne: "",
  phoneNumberTwo: "",
  data: {
    hotelName: "",
    contactPerson: "",
    phoneNumberOne: "",
    phoneNumberTwo: "",
  },
  rating: 0.0,
  managerHotel: false,
  setField: (field, value) => {
    set((prevState) => ({
      ...prevState,
      [field]: value,
      data: {
        ...prevState.data,
        [field]: value,
      },
    }));
  },
}));

export default useRegisterHotelName;
