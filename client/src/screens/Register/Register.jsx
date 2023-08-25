import { useContext, useState } from "react";
import { use100vh } from "react-div-100vh";

import { ThemeContext } from "../../components/Contexts/AppThemeProvider";
import Entry from "./Entry/Entry";
import Code from "./Code/Code";

function Register() {
  const { darkMode } = useContext(ThemeContext);
  const heightWindow = use100vh();
  const [visible, setVisible] = useState(true);

  const handleConfirm = () => {
    setVisible(false);
  };

  return (
    <div className={`${darkMode}`}>
      <div
        className={`flex justify-center p-[48px] bg-gray-50 dark:bg-primary-700`}
        style={{ minHeight: heightWindow }}
      >
        {visible ? <Entry onConfirm={handleConfirm} /> : <Code />}
      </div>
    </div>
  );
}

export default Register;
