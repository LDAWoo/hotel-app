import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import Button from "../../../components/Buttons/Button";
import Title from "../../../components/Title/Title";
import routesConfig from "../../../configs/routesConfig";
import useRegisterDateStore from "../../../hooks/useRegisterDateStore";
import useRegisterGuestStore from "../../../hooks/useRegisterGuestStore";
import useRegisterLocationStore from "../../../hooks/useRegisterLocationStore";
import CheckIn from "./CheckIn/ChechIn";
import CheckOut from "./CheckOut/CheckOut";
import Guest from "./Guest/Guest";
import Location from "./Location/Location";

function Search() {
  const { t } = useTranslation();
  const {valueLocation,onOpenAlert, onCloseAlert} = useRegisterLocationStore();
  const { startDate, endDate } = useRegisterDateStore();
  const { adult, child, rooms } = useRegisterGuestStore();

  const handleSubmit = () => {
    const location = valueLocation?.split(" ").join("+");

    if (!location) {
      onOpenAlert();
      return;
    }
    onCloseAlert();

    const queryParams = new URLSearchParams();
    queryParams.set("location", valueLocation);
    queryParams.set("checkin", format(startDate, "yyyy-MM-dd"));
    queryParams.set("checkout", format(endDate, "yyyy-MM-dd"));
    queryParams.set("group_adults", adult);
    queryParams.set("group_children", child);
    queryParams.set("group_rooms", rooms);
    const queryString = queryParams.toString();

    window.open(
      `${routesConfig.searchResults}?${queryString}`,
      "_blank",
    )
  };

  return (
    <div className='w-full flex flex-col gap-2'>
      <Title title={t("Search.search")} extraLarge4 fontMedium/>
      <Location />
      <CheckIn />
      <CheckOut />
      <Guest/>
      <Button onClick={handleSubmit} title={t("Search.search")} background className="mt-2 p-[8px_0_8px_0]" classButton="w-full justify-center"/>
    </div>
  );
}

export default Search;
