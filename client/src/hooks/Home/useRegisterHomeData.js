import { create } from "zustand";

const useRegisterHomeData = create((set) => ({
    homeData: {},
    setHomeData: (data) => set({ homeData: data }),
    currentData: [],
    setCurrentData: (data) => set({ currentData: data }),
    loading: true,
    setLoading: (isLoading) => set({ loading: isLoading }),
}))

export default useRegisterHomeData;