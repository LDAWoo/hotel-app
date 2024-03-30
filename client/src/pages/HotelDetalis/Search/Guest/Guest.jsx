import { differenceInDays } from "date-fns";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineUser } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import GuestMenu from "../../../../components/Search/Guest/GuestMenu";
import Title from "../../../../components/Title/Title";
import TitleComponent from "../../../../components/TitleComponent/TitleComponent";
import RegisterToolTip from "../../../../components/ToolTip/RegisterToolTip/RegisterToolTip";
import useRegisterDateStore from "../../../../hooks/useRegisterDateStore";
import useRegisterGuestStore from "../../../../hooks/useRegisterGuestStore";
import userRegisterToolTipAdult from "../../../../hooks/useRegisterToolTipAdult";
import ButtonSearch from "../ButtonSearch";

function Guest() {
  const { t } = useTranslation();
  const { adult, child, rooms, setAdult, setChildren, setRooms } =
    useRegisterGuestStore();
  const [searchParams] = useSearchParams();
  const {startDate,endDate} = useRegisterDateStore()
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

  const numberOfDate = differenceInDays(endDate, startDate);

  return (
    <div className='flex flex-col'>
      <Title title={`${numberOfDate} ${t("OurHotel.night")} ${t("HotelDetails.Search.stay")}`} large />
      <div className='relative w-full'>
        <ButtonSearch
          icon={AiOutlineUser}
          size={14}
          type="button"
          title={`${adult} ${t("Search.Guest.Adult.title")} · ${child} ${t(
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
          zIndex='z-[999]'
        />
      </div>
    </div>
  );
}

export default Guest;
