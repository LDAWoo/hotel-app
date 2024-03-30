import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Image from "../../../../components/Image/Image";
import Title from "../../../../components/Title/Title";
function GalleryItem({
  imgURL,
  width,
  height,
  left,
  right,
  values,
  imageEnd,
  onClick,
}) {
  const {t} = useTranslation()

  return (
    <div
      className={`relative block ${width && width} ${height && height} ${
        left && "float-left"
      } ${
        right && "float-right"
      } mb-[10px] bg-cover bg-no-repeat bg-[50%] bg-gray-200 dark:bg-primary-600 cursor-pointer`}
      onClick={onClick}
    >
      <Image src={imgURL} className='flex w-full h-full object-cover' />
      {imageEnd && values > 0 && (
        <div className='absolute top-0 flex items-center justify-center bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.40)] z-10'>
          <Title
            className='text-white border-b-[1px]'
            title={`+${values} ${t("HotelDetails.Gallery.photo")}`}
            fontBold
            extraLarge4
          />
        </div>
      )}
    </div>
  );
}

GalleryItem.propTypes = {
  imgURL: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  values: PropTypes.number,
  imageEnd: PropTypes.bool,
  onClick: PropTypes.func,
};

export default GalleryItem;
