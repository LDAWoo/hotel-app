function initFacebookSDK() {
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: import.meta.env.VITE_APP_FACEBOOK_APP_ID,
      autoLogAppEvents: true,
      cookie: true,
      xfbml: true,
      version: "v11.0",
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
}

export default function useFacebookSDK() {
  // useEffect(() => {

  initFacebookSDK();
  // }, []);
}
