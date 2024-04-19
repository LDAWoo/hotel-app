const joinLink = import.meta.env.VITE_APP_BASE_URL_JOIN_STAYING;

const routesConfig = {
  login: "/login",
  register: "/register",
  contactDetails: "/register/contact-details",
  registerPassword: "/register/password",
  forgotPassword: "/forgot-password",
  forgotConfirmation: "/forgot-password/confirmation",
  checkEmail: "/register/check-email",
  home: "/",
  mywishlist: "/mywishlist",
  mytrip: "/booking/mytrip",
  mybooking: "/booking/mybooking",
  bookingconfirmation: "/booking/confirmation",
  bookingreview: "/booking/review",
  bookingreviewsubmitted: "/booking/reviewsubmitted/:id",
  bookingreviewtimeline: "/booking/reviewtimeline",
  profile: "/profile",
  profileInformation: "/profile/information",
  profileSecurity: "/profile/security",
  searchResults: "/searchresults",
  hotelDetails: "/hotel",
  join: joinLink,
  secureBooking: "/secure-book",
  successfully: "/successfully",
  notPage: "/*",
};

export default routesConfig;
