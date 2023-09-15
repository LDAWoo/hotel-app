import { format } from "date-fns";
import { useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Arrow from "../../../components/Arrow/Arrow";
import { recentSearch } from "../../../components/Constants/RecentSearch";
import { getLocale } from "../../../components/Locale/Locale";
import HomeTitle from "../HomeTitle";
import RecentSearchBox from "./RecentSearchBox";
import { useSwipeable } from "react-swipeable";
import { DeviceContext } from "../../../components/Contexts/AppDeviceProvider";
function RecentSearch() {
  const { t } = useTranslation();
  const scrollRef = useRef();
  const { isMobile } = useContext(DeviceContext);

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

  const handlers = useSwipeable({
    onSwipedLeft: () => handleScrollRight(),
    onSwipedRight: () => handleScrollLeft(),
    swipeDuration: 5000,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <HomeTitle title={t("RecentSearch.title")} />
        </div>
        <div className='w-full pl-3 pr-3'>
          <div className='w-full pl-3 pr-5 pt-2 pb-4'>
            <div className='relative w-full'>
              <div
                ref={scrollRef}
                className='w-[calc(100%_+_14px)] flex-nowrap flex overflow-hidden scroll-smooth p-1 box-border'
              >
                {recentSearch.map((item, index) => (
                  <RecentSearchBox
                    {...handlers}
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
              {!isMobile && isArrowLeftVisible && (
                <Arrow
                  icon={MdOutlineArrowBackIos}
                  left='-left-4'
                  onClick={handleScrollLeft}
                  top='top-[35%]'
                  width='w-[30px] sm:w-[40px]'
                  height='h-[30px] sm:h-[40px]'
                  size={16}
                />
              )}

              {!isMobile && isArrowRightVisible && (
                <Arrow
                  icon={MdOutlineArrowForwardIos}
                  right='-right-8'
                  onClick={handleScrollRight}
                  top='top-[35%]'
                  width='w-[30px] sm:w-[40px]'
                  height='h-[30px] sm:h-[40px]'
                  size={16}
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
