import { memo } from "react";
import { photos } from "../../../../components/Constants/GalleryPhotos";
import useRegisterModalImage from "../../../../hooks/Image/useRegisterModalImage";
import useRegisterWindowSizeStore from "../../../../hooks/useRegisterWindowSizeStore";
import Card from "../../../Home/OurHotel/Card";
import GalleryItem from "./GalleryItem";

const startTopPhotos = 0;
const startBottomPhotos = 3;
const maxPhotos = 3;
const remainingPhotos =
  photos[0].images.length - (maxPhotos + startBottomPhotos);

function Gallery() {
  const { width } = useRegisterWindowSizeStore();
  const { onOpen } = useRegisterModalImage();
  const handleShowImageModal = () => {
    onOpen();
  };

  return (
    <>
      <div className='relative w-full overflow-hidden'>
        {width > 640 ? (
          <div className='relative w-full'>
            {photos[0].images
              .slice(startTopPhotos, maxPhotos)
              .map((photo, index) => (
                <GalleryItem
                  key={index}
                  imgURL={photo}
                  width={`${index < 1 ? "w-[66.3%]" : "w-[32.7%]"}`}
                  height={`${index < 1 ? "h-[350px]" : "h-[170px]"}`}
                  left={index > 0}
                  right={index < 1}
                  onClick={handleShowImageModal}
                />
              ))}

            <div className='w-full space-x-2'>
              {photos[0].images
                .slice(startBottomPhotos, maxPhotos + startBottomPhotos)
                .map((photo, index) => (
                  <GalleryItem
                    key={index}
                    imgURL={photo}
                    width='w-[calc((100%_-_16px)_/_3)]'
                    height='h-[130px]'
                    left
                    onClick={handleShowImageModal}
                    imageEnd={
                      index + 1 + maxPhotos === maxPhotos + startBottomPhotos
                    }
                    values={remainingPhotos}
                  />
                ))}
            </div>
          </div>
        ) : (
          <Card data={photos[0]} />
        )}
      </div>
    </>
  );
}

export default memo(Gallery);
