import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineUser } from "react-icons/ai";
import useRegisterGuestStore from "../../../hooks/useRegisterGuestStore";
import ToolTip from "../../ToolTip/ToolTip";
import SearchBox from "../SearchBox";
import GuestMenu from "./GuestMenu";

function GuestBox() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const { adult, child, rooms } = useRegisterGuestStore();

  const handleClickOutSide = () => {
    setVisible(!visible);
  };
  return (
    <div className='w-full'>
      <ToolTip
        typeToolTip='TippyHeadless'
        width={360}
        isVisible={visible}
        placement='bottom-end'
        items={<GuestMenu />}
        onClickOutside={handleClickOutSide}
      >
        <div>
          <SearchBox
            icon={AiOutlineUser}
            size={24}
            button
            label={`${adult} ${t("Search.Guest.Adult.title")} · ${child} ${t(
              "Search.Guest.Children.title",
            )} · ${rooms} ${t("Search.Guest.Room.title")}`}
            onClick={handleClickOutSide}
          />
        </div>
      </ToolTip>
    </div>
  );
}

export default GuestBox;
