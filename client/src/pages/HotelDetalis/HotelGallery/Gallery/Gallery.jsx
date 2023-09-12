import { photos } from "../../../../components/Constants/GalleryPhotos";
import useRegisterWindowSizeStore from "../../../../hooks/useRegisterWindowSizeStore";
import Carousel from "../../../Home/OurHotel/Carousel";
import GalleryItem from "./GalleryItem";

const startTopPhotos = 0;
const startBottomPhotos = 2;
const maxPhotos = 3;
const remainingPhotos = photos.length - (maxPhotos + startBottomPhotos);

function Gallery() {
  const { width } = useRegisterWindowSizeStore();
  return (
    <div className='relative w-full overflow-hidden'>
      {width > 640 ? (
        <div className='relative w-full'>
          {photos.slice(startTopPhotos, maxPhotos).map((photo, index) => (
            <GalleryItem
              key={index}
              imgURL={photo.src}
              width={`${index < 1 ? "w-[66.3%]" : "w-[32.7%]"}`}
              height={`${index < 1 ? "h-[350px]" : "h-[170px]"}`}
              left={index > 0}
              right={index < 1}
            />
          ))}

          <div className='w-full space-x-2'>
            {photos
              .slice(startBottomPhotos, maxPhotos + startBottomPhotos)
              .map((photo, index) => (
                <GalleryItem
                  key={index}
                  imgURL={photo.src}
                  width='w-[calc((100%_-_16px)_/_3)]'
                  height='h-[130px]'
                  left
                  imageEnd={index + maxPhotos === maxPhotos + startBottomPhotos}
                  values={remainingPhotos}
                />
              ))}
          </div>
        </div>
      ) : (
        <Carousel visible={true}>
          {photos.map((photo, index) => (
            <img
              src={photo?.src}
              key={index}
              className='min-w-screen-sm rounded-lg object-cover'
            />
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default Gallery;
