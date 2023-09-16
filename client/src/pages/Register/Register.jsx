import { useNavigate } from "react-router-dom";
import useRegisterUserRegister from "../../hooks/Register/useRegisterUserRegister";
import { post } from "../../utils/request";
import Entry from "./Entry/Entry";
import routesConfig from "../../configs/routesConfig";
function Register() {
  const { firstName, lastName, email, password } = useRegisterUserRegister();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await post("auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log("Đăng ký thành công:", response);
      navigate(routesConfig.checkEmail);
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return <Entry onClick={handleSignIn} />;
}

export default Register;
