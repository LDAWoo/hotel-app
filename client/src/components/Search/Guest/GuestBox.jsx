import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineUser } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import useRegisterGuestStore from "../../../hooks/useRegisterGuestStore";
import userRegisterToolTipAdult from "../../../hooks/useRegisterToolTipAdult";
import TitleComponent from "../../TitleComponent/TitleComponent";
import RegisterToolTip from "../../ToolTip/RegisterToolTip/RegisterToolTip";
import SearchBox from "../SearchBox";
import GuestMenu from "./GuestMenu";

function GuestBox() {
  const { t } = useTranslation();
  const { adult, child, rooms, setAdult, setChildren, setRooms } =
    useRegisterGuestStore();
  const [searchParams] = useSearchParams();

  const currentAdults = parseInt(searchParams?.get("group_adults"));
  const currentChildren = parseInt(searchParams?.get("group_children"));
  const currentRooms = parseInt(searchParams?.get("group_rooms"));

  const validateChildren = (value) => {
    if (isNaN(value) || value < 0) {
      setChildren(0);
    } else {
      setChildren(value);
    }
  };

  const validateAdult = (value) => {
    if (isNaN(value) || value < 0) {
      setAdult(1);
    } else {
      setAdult(value);
    }
  };

  const validateRooms = (value) => {
    if (isNaN(value) || value < 0) {
      setRooms(1);
    } else {
      setRooms(value);
    }
  };
  useEffect(() => {
    validateAdult(currentAdults);
    validateChildren(currentChildren);
    validateRooms(currentRooms);
  }, []);

  const { onOpen } = userRegisterToolTipAdult();
  const handleShowAdult = () => {
    onOpen();
  };
  return (
    <div className='relative w-full'>
      <SearchBox
        icon={AiOutlineUser}
        size={24}
        button
        label={`${adult} ${t("Search.Guest.Adult.title")} · ${child} ${t(
          "Search.Guest.Children.title",
        )} · ${rooms} ${t("Search.Guest.Room.title")}`}
        onClick={handleShowAdult}
      />
      <RegisterToolTip
        render={<GuestMenu />}
        width={360}
        component={
          <TitleComponent
            title={`${adult} ${t("Search.Guest.Adult.title")} · ${child} ${t(
              "Search.Guest.Children.title",
            )} · ${rooms} ${t("Search.Guest.Room.title")}`}
            icon={AiOutlineUser}
          />
        }
        userRegisterToolTip={userRegisterToolTipAdult}
      />
    </div>
  );
}

export default GuestBox;
