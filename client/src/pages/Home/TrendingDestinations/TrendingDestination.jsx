import { useTranslation } from "react-i18next";
import CoreCarousel from "../../../components/Carousel/CoreCarousel";
import { trendingDestinations } from "../../../components/Constants/TrendingDestination";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import HomeTitle from "../HomeTitle";
import RenderTrendingCards from "./RenderTrendingCards";
import TrendingCardCarousel from "./TrendingCardCarousel";
import TrendingCardCarouselSkeleton from "./TrendingCardCarouselSkeleton";
import { useEffect, useState } from "react";
function TrendingDestination() {
  const { t } = useTranslation();
  const { width } = useRegisterWindowSizeStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <HomeTitle
            title={t("TrendingDestination.title")}
            subTitle={t("TrendingDestination.subTitle")}
          />
        </div>

        {width >= 640 ? (
          <div className='w-full flex flex-col gap-3'>
            <div className='flex flex-row w-full gap-3'>
              <RenderTrendingCards
                data={trendingDestinations}
                startIndex={0}
                endIndex={2}
                maxImage={2}
              />
            </div>

            <div className='flex w-full flex-row gap-3'>
              <RenderTrendingCards
                data={trendingDestinations}
                startIndex={2}
                endIndex={trendingDestinations.length}
                maxImage={3}
              />
            </div>
          </div>
        ) : (
          <CoreCarousel
            classUl='gap-3'
            classLi='mr-0'
            data={trendingDestinations}
            component={
              isLoading ? TrendingCardCarouselSkeleton : TrendingCardCarousel
            }
          />
        )}
      </div>
    </div>
  );
}

export default TrendingDestination;
