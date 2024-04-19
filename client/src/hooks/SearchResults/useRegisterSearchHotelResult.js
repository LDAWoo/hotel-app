import { create } from "zustand";

const useRegisterSearchHotelResult = create((set) => ({
  ourHotels: [],
  pageable: {},
  setPageable: (pageable) => set({ pageable: pageable }),
  setOurHotels: (result) => set({ ourHotels: result }),
  loading: true,
  setLoading: (isLoading) => set({ loading: isLoading }),
  querySearch: '',
  setQuerySearch: (query) => set({ querySearch: query }),
}));

export default useRegisterSearchHotelResult;
