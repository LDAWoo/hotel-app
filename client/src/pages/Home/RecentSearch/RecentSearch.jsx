import { format } from "date-fns";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { recentSearch } from "../../../components/Constants/RecentSearch";
import { getLocale } from "../../../components/Locale/Locale";
import Arrow from "../../../components/Arrow/Arrow";
import RecentSearchBox from "./RecentSearchBox";
function RecentSearch() {
  const { t } = useTranslation();

  const scrollRef = useRef();
  const [isArrowLeftVisible, setIsArrowLeftVisible] = useState(false);
  const [isArrowRightVisible, setIsArrowRightVisible] = useState(
    recentSearch.length > 3,
  );
  const locale = getLocale();
  const handleScrollLeft = () => {
    const container = scrollRef.current;
    const scrollStep = container.clientWidth;
    container.scrollLeft -= scrollStep;
    if (container.scrollLeft <= scrollStep) {
      setIsArrowLeftVisible(false);
    }
    setIsArrowRightVisible(true);
  };

  const handleScrollRight = () => {
    const container = scrollRef.current;
    const scrollStep = container.clientWidth;
    const maxScroll = container.scrollWidth - container.clientWidth;

    container.scrollLeft += scrollStep;
    if (container.scrollLeft >= maxScroll - scrollStep) {
      setIsArrowRightVisible(false);
    }
    setIsArrowLeftVisible(true);
  };

  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <span className='flex items-center text-[20px] md:text-[24px] font-bold dark:text-white'>
            {t("RecentSearch.title")}
          </span>
        </div>
        <div className='w-full pl-3 pr-3'>
          <div className='w-full pl-3 pr-5 pt-2 pb-4'>
            <div className='relative w-full'>
              <div
                ref={scrollRef}
                className='w-[calc(100%_+_16px)] flex-nowrap flex overflow-hidden scroll-smooth p-1 box-border'
              >
                {recentSearch.map((item, index) => (
                  <RecentSearchBox
                    key={item.id}
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
                    endScroll={index === recentSearch.length - 1}
                  />
                ))}
              </div>
              {isArrowLeftVisible && (
                <Arrow
                  icon={MdOutlineArrowBackIos}
                  left='-left-5'
                  onClick={handleScrollLeft}
                  top='top-[35%]'
                  width='w-[40px]'
                  height='h-[40px]'
                />
              )}

              {isArrowRightVisible && (
                <Arrow
                  icon={MdOutlineArrowForwardIos}
                  right='-right-7'
                  onClick={handleScrollRight}
                  top='top-[35%]'
                  width='w-[40px]'
                  height='h-[40px]'
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentSearch;
