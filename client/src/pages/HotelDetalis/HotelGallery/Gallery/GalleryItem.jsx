import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function GalleryItem({ imgURL, width, height, left, right, values, imageEnd }) {
  return (
    <Link
      className={`relative block ${width && width} ${height && height} ${
        left && "float-left"
      } ${
        right && "float-right"
      } mb-[10px] bg-cover bg-no-repeat bg-[50%] bg-gray-200 dark:bg-primary-600`}
      style={{ backgroundImage: `url('${imgURL}')` }}
    >
      <img src={imgURL} className='hidden' />
      {imageEnd && (
        <div className='absolute top-0 flex items-center justify-center bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.40)] z-10'>
          <span className='text-white font-bold text-[18px] border-b-[1px]'>
            +{values} photos
          </span>
        </div>
      )}
    </Link>
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
};

export default GalleryItem;
