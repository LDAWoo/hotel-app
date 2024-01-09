import PropTypes from "prop-types";

const BorderPhoto = ({ position }) => {
  return (
    <div
      className={`rounded-[4px] border border-dashed aspect-[20/20] box-border float-left m-[10px] text-center relative ${
        position === 0 ? "border-hotel-50" : "border-hotel-75"
      }`}
    >
      {position === 0 && (
        <div className='absolute -top-[26px] w-full'>
          <span className='bg-[#ff8000] p-[2px] text-[13px] rounded-[2px]'>
            Main photo
          </span>
        </div>
      )}
    </div>
  );
};

BorderPhoto.propTypes = {
  position: PropTypes.number,
};

export default BorderPhoto;
