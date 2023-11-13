const LoadingFullScreen = () => {
  return (
    <div className='fixed bg-[hsla(120,5%,96%,.8)] dark:bg-[hsla(120,5%,96%,.5)] top-0 left-0 right-0 bottom-0 h-full w-full transition-transform z-[1004]'>
      <div className='flex items-center ml-[50%] justify-center rounded-lg flex-col overflow-hidden sticky whitespace-nowrap -translate-x-[50%] -translate-y-[50%] w-fit top-[50%]'>
        <div className='mb-2'>
          <div
            className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-hotel-100 border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]'
            role='status'
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingFullScreen;
