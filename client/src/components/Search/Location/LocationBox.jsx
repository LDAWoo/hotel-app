import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { useTranslation } from "react-i18next";

import SearchBox from "../SearchBox";

function LocationBox() {
  const [valueLocation, setValueLocation] = useState("");
  const { t } = useTranslation();
  const handleChangeInput = (e) => {
    setValueLocation(e.target.value);
  };

  const handleClose = () => {
    setValueLocation("");
  };

  return (
    <SearchBox
      input
      placeholder={t("Search.location")}
      icon={SlLocationPin}
      size={24}
      iconClose={AiOutlineClose}
      sizeClose={18}
      value={valueLocation}
      handleChangeInput={handleChangeInput}
      handleClose={handleClose}
    />
  );
}

export default LocationBox;
