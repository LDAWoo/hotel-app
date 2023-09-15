import i18next from "i18next";
import MenuButton from "./MenuButton";
import PropTypes from "prop-types";
import useRegisterModal from "../../../../../hooks/useRegisterModal";
import useRegisterToolTipMenuMore from "../../../../../hooks/useRegisterToolTipMenuMore";

function Language({ data }) {
  const { onOpen } = useRegisterModal();
  const { onClose } = useRegisterToolTipMenuMore();
  const handleShowLanguage = () => {
    onClose();
    onOpen();
  };

  return (
    <div>
      {data.map((langItem) => {
        if (langItem.code === i18next.language) {
          return (
            <MenuButton
              key={langItem.id}
              title={langItem.title}
              src={langItem?.img}
              onClick={handleShowLanguage}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

Language.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Language;
