import Image from "../../../../components/Image/Image";
import useRegisterHotelDetails from "../../../../hooks/HotelDetails/useRegisterHotelDetails";

const ImageBody = () => {
  const { hotels } = useRegisterHotelDetails();

  return (
    <div className='flex flex-row w-full h-full'>
      <div className='grid 2md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {hotels?.images.map((photo, index) => (
          <div
            key={index}
            className='rounded-sm'
            style={{ aspectRatio: "20/19" }}
          >
            <Image
              imageBase={photo?.picByte}
              className='w-full h-full object-cover rounded-sm'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBody;
