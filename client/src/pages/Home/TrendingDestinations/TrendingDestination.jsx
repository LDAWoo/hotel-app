import { useTranslation } from "react-i18next";
import CoreCarousel from "../../../components/Carousel/CoreCarousel";
import { trendingDestinations } from "../../../components/Constants/TrendingDestination";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import RenderTrendingCards from "./RenderTrendingCards";
import TrendingCardCarousel from "./TrendingCardCarousel";
import Title from "../../../components/Title/Title";
function TrendingDestination() {
  const { t } = useTranslation();
  const { width } = useRegisterWindowSizeStore();
  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <div className='flex flex-col'>
            <Title
              title={t("TrendingDestination.title")}
              extraLarge4
              fontBold
              colorTitle='dark:text-white'
              nowrap={false}
            />
            <Title
              title={t("TrendingDestination.subTitle")}
              xxl
              colorTitle='text-primary-100 dark:text-primary-50'
              nowrap={false}
            />
          </div>
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
            data={trendingDestinations}
            component={TrendingCardCarousel}
          />
        )}
      </div>
    </div>
  );
}

export default TrendingDestination;
