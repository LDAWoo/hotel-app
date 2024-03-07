import { create } from "zustand";

const useRegisterCompositionAndPrice = create((set) => ({
  rooms: [],
  roomType: "",
  roomName: "",
  nameCustom: "",
  errorNameCustom: "",
  quantityRoom: 0,
  errorQuantityRoom: "",
  roomArea: 0,
  errorRoomArea: "",
  maxOccupancy: 0,
  errorOccupancy: "",
  bedName: "",
  pricePerNight: 0,
  errorPricePerNight: "",

  setField: (field, value) =>
    set((prev) => ({
      ...prev,
      [field]: value,
    })),
}));

export default useRegisterCompositionAndPrice;
