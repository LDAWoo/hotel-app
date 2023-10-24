import { BsFillImageFill } from "react-icons/bs";
import { PiCameraLight } from "react-icons/pi";
import Button from "../../../components/Buttons/Button";
import Icon from "../../../components/Icon/Icon";
import Title from "../../../components/Title/Title";
import { useRef, useState } from "react";
import BorderPhoto from "./BorderPhoto";
import DragImage from "./DragImage";

const ComponentPhotoHost = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef();

  const onDragEnter = () => {
    // console.log("Enter");
    setIsDragging(true);
  };

  const onDragLeave = () => {
    // console.log("Leave");
    setIsDragging(false);
  };

  const onDrop = () => {
    setIsDragging(false);
  };

  const onFileDrop = (e) => {
    const files = e.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImage) => [
          ...prevImage,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  const handleDeleteImage = (image) => {
    setImages((prevImage) => prevImage.filter((img) => img.name != image));
  };

  return (
    <div
      className={`w-full border dark:border-primary-500 p-4 z-50 ${
        isDragging ? "border-hotel-200 bg-hotel-25 dark:bg-primary-600" : ""
      }`}
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
    >
      <div
        className='flex flex-col gap-2'
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        onDragLeave={onDragLeave}
      >
        <div className='font-medium inline dark:text-white text-[14px]'>
          Upload at least 5 photos of your property.{" "}
          <span className='font-normal inline'>
            The more you upload, the more likely you are to get bookings. You
            can add more later.
          </span>
        </div>

        <div className='basis-[222px] text-center border-none flex p-0 rounded-[3px] relative'>
          <div className='p-4 bg-transparent border-[2px] border-dashed border-primary-100 dark:border-primary-200 box-border flex flex-col justify-around absolute top-0 bottom-0 w-full'>
            <div className='flex flex-col items-center'>
              <Icon
                icon={BsFillImageFill}
                size={88}
                classIcon='text-primary-100 dark:text-white opacity-20 dark:opacity-50'
              />
              <Title title='Drag and drop or' fontBold xl />
            </div>

            <div className='w-auto'>
              <Button
                className='w-auto justify-center p-2'
                fontMedium
                border
                icon={PiCameraLight}
                size={22}
                xl
                title='Upload photos'
              />
            </div>

            <Title
              title='jpg,jpeg or png, maximum 20MB each'
              xl
              colorTitle='dark:text-primary-50'
            />

            <input
              ref={fileInputRef}
              type='file'
              className='absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer block w-full z-10'
              multiple
              onChange={onFileDrop}
            />
          </div>
        </div>

        <div>
          <div className='flex flex-col text-[14px] gap-2 pt-[10px] pb-10 text-primary-300 dark:text-primary-50'>
            <hr className='dark:border-primary-500' />
            <span>
              Choose a <b className='dark:text-white'>main photo</b> that will
              make a good first impression.
            </span>
            <span>
              Click and drag the photos to arrange them in the order you would
              like guests to see them.
            </span>
          </div>

          <div className='grid grid-cols-[calc(100%_+_2px)]'>
            {images.length > 0 && (
              <div className='grid grid-cols-2' style={{ gridArea: "1/1" }}>
                {images.map((_, index) => (
                  <BorderPhoto key={index} position={index} />
                ))}
              </div>
            )}
            {images.length > 0 && (
              <DragImage data={images} onClick={handleDeleteImage} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPhotoHost;
