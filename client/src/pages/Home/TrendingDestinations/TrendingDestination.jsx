import { useTranslation } from "react-i18next";
import CoreCarousel from "../../../components/Carousel/CoreCarousel";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import HomeTitle from "../HomeTitle";
import RenderTrendingCards from "./RenderTrendingCards";
import TrendingCardCarousel from "./TrendingCardCarousel";
import TrendingCardCarouselSkeleton from "./TrendingCardCarouselSkeleton";
function TrendingDestination({ loading }) {
  const { t } = useTranslation();

  const trendingDestinations = [
    {
      id: 1,
      destination: "Hà Nội",
      src: "/images/HaNoiDestination.jpg",
      areaImage: "/images/flagVietNam.png",
      city: "Hà Nội",
    },
    {
      id: 2,
      destination: "Đà Nẵng",
      src: "/images/DaNangDestination.jpg",
      areaImage: "/images/flagVietNam.png",
      city: "Đà Nẵng",
    },
    {
      id: 3,
      destination: "Nha Trang",
      src: "/images/NhaTrangDestination.jpg",
      areaImage: "/images/flagVietNam.png",
      city: "Nha Trang",
    },
    {
      id: 4,
      destination: "Vũng Tàu",
      src: "/images/VungTauDestination.jpg",
      areaImage: "/images/flagVietNam.png",
      city: "Vũng Tàu",
    },
    {
      id: 5,
      destination: "Hồ Chí Minh",
      src: "/images/TPHCMDestination.jpg",
      areaImage: "/images/flagVietNam.png",
      city: "Hồ Chí Minh",
    },
  ];

  const { width } = useRegisterWindowSizeStore();

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
              loading ? TrendingCardCarouselSkeleton : TrendingCardCarousel
            }
          />
        )}
      </div>
    </div>
  );
}

export default TrendingDestination;
