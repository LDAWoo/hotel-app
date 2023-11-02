import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import CarouselCustom from "../../../components/Carousel/CarouselCustom";
import { recentSearch } from "../../../components/Constants/RecentSearch";
import { getLocale } from "../../../components/Locale/Locale";
import HomeTitle from "../HomeTitle";
import RecentSearchBox from "./RecentSearchBox";
function RecentSearch() {
  const { t } = useTranslation();
  const locale = getLocale();
  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <HomeTitle title={t("RecentSearch.title")} />
        </div>
        <div className='w-full '>
          <CarouselCustom
            data={recentSearch?.map((item, index) => (
              <RecentSearchBox
                key={index}
                to={item.to}
                location={item.location}
                content={`${format(
                  new Date("2023-09-20T00:00:00.166584+02:00"),
                  "d MMM ",
                  { locale },
                )} - ${format(
                  new Date("2023-09-23T00:00:00.166584+02:00"),
                  "d MMM",
                  { locale },
                )}, ${item.adult} ${t("Search.Guest.Adult.title")}`}
                src={item.src}
              />
            ))}
          />
        </div>
      </div>
    </div>
  );
}

export default RecentSearch;
