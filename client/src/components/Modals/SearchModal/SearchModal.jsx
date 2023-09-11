import Modals from "../Modals";
import useRegisterModalSearch from "../../../hooks/useRegisterModalSearch";
import SideBar from "../../../pages/HotelDetalis/SideBar/SideBar";
import { useTranslation } from "react-i18next";

function SearchModal() {
  const { isOpen, onClose } = useRegisterModalSearch();
  const { t } = useTranslation();
  return (
    <Modals
      isOpen={isOpen}
      onClose={onClose}
      title={t("Search.search")}
      body={<SideBar />}
    />
  );
}

export default SearchModal;
