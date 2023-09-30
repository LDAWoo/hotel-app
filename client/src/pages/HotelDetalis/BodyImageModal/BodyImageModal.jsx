import ImageBody from "./ImageBody";
import ReviewBody from "./ReviewBody";

const BodyImageModal = () => {
  return (
    <div className='flex flex-row w-full justify-center mx-auto h-full'>
      <div className='flex flex-row w-full h-full p-4'>
        {/* ImageBody */}
        <div className='w-full 2md:w-[75%] min-h-[calc(100%_-_80px)] overflow-x-hidden overflow-y-scroll pr-4'>
          <ImageBody />
        </div>
        {/* ReviewBody */}
        <div className='w-0 2md:w-[25%] min-h-[calc(100%_-_80px)] overflow-x-hidden overflow-y-auto'>
          <ReviewBody />
        </div>
      </div>
    </div>
  );
};

export default BodyImageModal;
