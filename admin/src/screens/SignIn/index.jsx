import { useContext, useState } from "react";
import cn from "classnames";
import styles from "./SignIn.module.sass";
import { use100vh } from "react-div-100vh";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Image from "../../components/Image";
import { UserContext } from "../../components/Contexts/AppUserProvider";
import { validatePassword } from "../../components/Validate/Password";

const SignIn = () => {
  const heightWindow = use100vh();
  const { handleLogin, loading } = useContext(UserContext);
  const [formData, setFormData] = useState({});

  const [state, setState] = useState({
    errorEmail: "",
    errorPassword: "",
  });
  const { email, password } = formData;

  const { errorEmail, errorPassword } = state;

  console.log(loading);
  const handleSubmit = () => {
    if (!validate()) return;
    handleLogin(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validate = () => {
    let isValid = true;
    // if (!validateEmail(email)) {
    //   setState((prevState) => ({ ...prevState, errorEmail: "Email invalid" }));
    //   isValid = false;
    // } else {
    //   setState((prevState) => ({ ...prevState, errorEmail: "" }));
    // }

    if (!validatePassword(password)) {
      setState((prevState) => ({
        ...prevState,
        errorPassword: "Password invalid",
      }));
      isValid = false;
    } else {
      setState((prevState) => ({
        ...prevState,
        errorPassword: "",
      }));
    }
    return isValid;
  };

  return (
    <div className={styles.login} style={{ minHeight: heightWindow }}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to="/">
          <Image className={styles.pic} src="/images/logo-dark.png" srcDark="/images/logo-light.png" alt="Core" />
        </Link>
        <div className={cn("h2", styles.title)}>Sign in</div>
        <div className={styles.head}>
          <div className={styles.subtitle}>Sign up with Open account</div>
          <div className={styles.btns}>
            <button className={cn("button-stroke", styles.button)}>
              <img src="/images/content/google.svg" alt="Google" />
              Google
            </button>
            <button className={cn("button-stroke", styles.button)}>
              <Image className={styles.pic} src="/images/content/apple-dark.svg" srcDark="/images/content/apple-light.svg" alt="Apple" />
              Apple ID
            </button>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.subtitle}>Or continue with email address</div>
          <TextInput className={styles.field} id="email" name="email" type="email" placeholder="Your email" required icon="mail" onChange={handleChange} />
          <TextInput className={styles.field} id="password" name="password" type="password" placeholder="Password" required icon="lock" onChange={handleChange} />
          <button disabled={loading} className={cn("button", styles.button)} onClick={handleSubmit}>
            Sign in
          </button>
          <div className={styles.note}>This site is protected by reCAPTCHA and the Google Privacy Policy.</div>
          <div className={styles.info}>
            Don’t have an account?{" "}
            <Link className={styles.link} to="/sign-up">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
