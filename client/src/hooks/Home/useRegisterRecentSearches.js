import {create} from 'zustand'

const useRegisterRecentSearches = create((set) => ({
    recentSearches: [],
    setRecentSearches: (searches) => set(() => ({ recentSearches: searches })),
    addRecentSearch: (search) => set((state) => ({ recentSearches: [...state.recentSearches, search] })),
    removeRecentSearch: (search) => set((state) => ({ recentSearches: state.recentSearches.filter((s) => s!== search) })),
    clearRecentSearches: () => set(() => ({ recentSearches: [] })),
}))

export default useRegisterRecentSearches;