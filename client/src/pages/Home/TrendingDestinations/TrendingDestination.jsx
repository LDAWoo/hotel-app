import { trendingDestinations } from "../../../components/Constants/TrendingDestination";
import RenderTrendingCards from "./RenderTrendingCards";
import { useTranslation } from "react-i18next";
function TrendingDestination() {
  const { t } = useTranslation();
  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <div className='flex flex-col'>
            <span className='flex items-center text-[20px] md:text-[24px] font-bold dark:text-white'>
              {t("TrendingDestination.title")}
            </span>
            <span className='flex items-center text-[14px] md:text-[16px] text-primary-200 dark:text-primary-50'>
              {t("TrendingDestination.subTitle")}
            </span>
          </div>
        </div>

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
      </div>
    </div>
  );
}

export default TrendingDestination;
