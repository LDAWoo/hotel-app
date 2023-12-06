import i18next from "i18next";
import PropTypes from "prop-types";
import useRegisterModalLanguage from "../../../../hooks/useRegisterModalLanguage";
import { Language as Languages } from "../../../Constants/Language";
import Button from "../../../Buttons/Button";

function Language({ visible }) {
  const { onOpen } = useRegisterModalLanguage();

  const handleChooseLanguage = () => {
    onOpen();
  };
  const currentLanguage = Languages.find((lang) => lang?.code === i18next.language);
  return <Button className="w-full h-full" src={currentLanguage?.img || "/images/flagVietNam.png"} classImg="rounded-full object-cover w-5 w-5 sm:w-6 sm:h-6" onClick={handleChooseLanguage} />;
}

Language.propTypes = {
  visible: PropTypes.bool,
};

export default Language;
