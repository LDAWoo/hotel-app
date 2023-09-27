import useRegisterWindowSizeStore from "../../../../hooks/useRegisterWindowSizeStore";

const AvailabilityChangeSearch = () => {
  const { width } = useRegisterWindowSizeStore();

  return (
    <div className='flex flex-row flex-shrink-0 w-full'>
      {width > 900 ? (
        <div className='w-full flex flex-col 2md:flex-row bg-secondary-50 p-1 gap-1'></div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AvailabilityChangeSearch;
