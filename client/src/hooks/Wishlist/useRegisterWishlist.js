import {create} from 'zustand'

const useRegisterWishlist  = create((set) => ({
    wishlist: [],
    loadingWishlist: true,
    setLoadingWishlist: (loading) => {
        set(() => ({
            loadingWishlist: loading
        }))
    },
    setWishlist: (wishlist) => {
        set(() => ({
            wishlist: wishlist
        }))
    },
    addToWishlist: (hotel) => {
        set((state) => ({
            wishlist: [...state.wishlist, hotel]
        }))
    },
    removeFromWishlist: (hotel) => {
        set((state) => ({
            wishlist: state.wishlist.filter((item) => item.hotelId!== hotel.hotelId)
        }))
    },
    removeTemporaryWishlist: (hotel) => {
        set((state) => ({
          wishlist: state.wishlist.map((item) => {
            if (item.hotelId === hotel.hotelId) {
              return {
                ...item,
                status: 'temporary',
              };
            }
            return item;
          }),
        }));
    },
    setTemporaryWishlist: (hotel) => {
        set((state) => ({
          wishlist: state.wishlist.map((item) => {
            if (item.hotelId === hotel.hotelId) {
              return {
                ...item,
                status: 'undo',
              };
            }
            return item;
          }),
        }));
    },
    clearWishlist: () => {
        set(() => ({
            wishlist: []
        }))
    }
}))

export default useRegisterWishlist;