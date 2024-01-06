import { memo } from "react";
import { photos } from "../../../../components/Constants/GalleryPhotos";
import useRegisterModalImage from "../../../../hooks/Image/useRegisterModalImage";
import useRegisterWindowSizeStore from "../../../../hooks/useRegisterWindowSizeStore";
import Card from "./Card";
import GalleryItem from "./GalleryItem";
import useRegisterHotelDetails from "../../../../hooks/HotelDetails/useRegisterHotelDetails";
import GallerySkeleton from "./GallerySkeleton";
import CarouselCustom from "../../../../components/Carousel/CarouselCustom";
import { Navigation, Pagination } from "swiper/modules";
import "./GalleryStyle.scss";
const startTopPhotos = 0;
const startBottomPhotos = 3;
const maxPhotos = 3;
const remainingPhotos =
  photos[0].images.length - (maxPhotos + startBottomPhotos);

function Gallery() {
  const { width } = useRegisterWindowSizeStore();
  const { onOpen } = useRegisterModalImage();

  const { hotels, loading } = useRegisterHotelDetails();

  const handleShowImageModal = () => {
    onOpen();
  };

  console.log(hotels);

  return (
    <>
      <div className='relative w-full overflow-hidden'>
        {width > 640 ? (
          <div className='relative w-full'>
            {loading ? (
              <GallerySkeleton />
            ) : (
              <>
                {hotels?.images
                  .slice(startTopPhotos, maxPhotos)
                  .map((photo, index) => (
                    <GalleryItem
                      key={index}
                      imgURL={photo?.picByte}
                      width={`${index < 1 ? "w-[66.3%]" : "w-[32.7%]"}`}
                      height={`${index < 1 ? "h-[350px]" : "h-[170px]"}`}
                      left={index > 0}
                      right={index < 1}
                      onClick={handleShowImageModal}
                    />
                  ))}
              </>
            )}

            <div className='w-full space-x-2'>
              {loading ? (
                <div></div>
              ) : (
                <>
                  {hotels?.images
                    .slice(startBottomPhotos, maxPhotos + startBottomPhotos)
                    .map((photo, index) => (
                      <GalleryItem
                        key={index}
                        imgURL={photo?.picByte}
                        width='w-[calc((100%_-_16px)_/_3)]'
                        height='h-[130px]'
                        left
                        onClick={handleShowImageModal}
                        imageEnd={
                          index + 1 + maxPhotos ===
                          maxPhotos + startBottomPhotos
                        }
                        values={remainingPhotos}
                      />
                    ))}
                </>
              )}
            </div>
          </div>
        ) : (
          <div>
            {loading ? (
              <div>Loading</div>
            ) : (
              <div>
                <CarouselCustom
                  spaceBetween={0}
                  navigation={true}
                  pagination={{
                    type: "fraction",
                  }}
                  modules={[Pagination, Navigation]}
                  slidesPerView={1}
                  slides={hotels?.images}
                  component={Card}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default memo(Gallery);
