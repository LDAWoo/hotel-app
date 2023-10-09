import { photos } from "../../../../components/Constants/GalleryPhotos";
import Image from "../../../../components/Image/Image";

const ImageBody = () => {
  return (
    <div className='flex flex-row w-full h-full'>
      <div className='grid 2md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {photos[0].images.map((photo, index) => (
          <div
            key={index}
            className='rounded-sm'
            style={{ aspectRatio: "20/19" }}
          >
            <Image
              src={photo}
              className='w-full h-full object-cover rounded-sm'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBody;
