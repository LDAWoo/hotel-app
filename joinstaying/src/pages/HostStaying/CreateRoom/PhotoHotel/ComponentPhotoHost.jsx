import { useEffect, useRef, useState } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { PiCameraLight } from "react-icons/pi";
import Button from "../../../../components/Buttons/Button";
import Icon from "../../../../components/Icon/Icon";
import Title from "../../../../components/Title/Title";
import useRegisterPhoto from "../../../../hooks/JoinStaying/PhotoHost/useRegisterPhoTo";
import BorderPhoto from "./BorderPhoto";
import DragImage from "./DragImage";
import { useTranslation } from "react-i18next";

const ComponentPhotoHost = () => {
  const { t } = useTranslation();
  const { photos, images, setField } = useRegisterPhoto();

  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef();

  const onDragEnter = () => {
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = () => {
    setIsDragging(false);
  };

  const onFileDrop = (e) => {
    const files = e.target.files;
    if (files.length === 0) return;

    const updatedImages = [...images];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.split("/")[0] !== "image") continue;

      if (!updatedImages.some((image) => image.name === file.name)) {
        updatedImages.push({
          name: file.name,
          url: URL.createObjectURL(file),
        });
      }
    }

    setField("images", updatedImages);
  };

  const handleDeleteImage = (image) => {
    setField(
      "images",
      images.filter((img) => img.name !== image)
    );
  };

  const handleUploadPhoto = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  useEffect(() => {
    setField("images", photos);
  }, []);

  return (
    <div className={`relative w-full dark:border-primary-500 z-5 ${isDragging ? "border-hotel-200 bg-hotel-25 dark:bg-primary-600" : ""}`} onDragEnter={onDragEnter} onDrop={onDrop} onDragLeave={onDragLeave}>
      <input ref={fileInputRef} type="file" className={`absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-default block w-full ${isDragging ? "z-10" : "-z-10"}`} multiple onChange={onFileDrop} />

      <div className="flex flex-col gap-2">
        <div className="font-medium inline dark:text-white text-[14px]">
          {t("HostStaying.CreateRoom.items.photo.information.uploadPhoto")} <span className="font-normal inline">{t("HostStaying.CreateRoom.items.photo.information.moreUploadPhoto")}</span>
        </div>

        <div className="basis-[222px] text-center border-none flex p-0 rounded-[3px] relative">
          <div className="p-4 bg-transparent border-[2px] border-dashed border-primary-100 dark:border-primary-200 box-border flex flex-col justify-around absolute top-0 bottom-0 w-full">
            <div className="flex flex-col items-center">
              <Icon icon={BsFillImageFill} size={88} classIcon="text-primary-100 dark:text-white opacity-20 dark:opacity-50" />
              <Title title={t("HostStaying.CreateRoom.items.photo.information.dragOrDrop")} fontBold xl />
            </div>

            <div className="w-auto">
              <Button className="w-auto justify-center p-2" fontMedium border icon={PiCameraLight} size={22} xl title={t("HostStaying.CreateRoom.items.photo.information.upload")} onClick={handleUploadPhoto} />
            </div>

            <Title title={t("HostStaying.CreateRoom.items.photo.information.maximum")} xl colorTitle="dark:text-primary-50" />
          </div>
        </div>

        <div>
          <div className="flex flex-col text-[14px] gap-2 pt-[10px] text-primary-300 dark:text-primary-50 pointer-events-none">
            <hr className="dark:border-primary-500" />
            <span>
              {t("HostStaying.CreateRoom.items.photo.information.choose")} <b className="dark:text-white">{t("HostStaying.CreateRoom.items.photo.information.mainPhoto")}</b> {t("HostStaying.CreateRoom.items.photo.information.photoGood")}
            </span>
            <span>{t("HostStaying.CreateRoom.items.photo.information.clickAndDrag")}</span>
          </div>

          <div className="grid grid-cols-[calc(100%_+_2px)] pt-10">
            {images.length > 0 && (
              <div className="grid grid-cols-2" style={{ gridArea: "1/1" }}>
                {images.map((_, index) => (
                  <BorderPhoto key={index} position={index} />
                ))}
              </div>
            )}
            <DragImage data={images} onClick={handleDeleteImage} images={photos} setImages={setField} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPhotoHost;
