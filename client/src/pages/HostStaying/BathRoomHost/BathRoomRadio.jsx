function BathRoomRadio({ data }) {
  return (
    <div className='flex flex-col gap-2'>
      {data.map((item, index) => (
        <div key={index} className='flex flex-row items-center'>
          <input
            type='radio'
            name={item?.name}
            className='w-4 h-4 mr-[8px] cursor-pointer dark:bg-primary-700'
            value={item?.value}
            id={item?.id}
          />
          <label
            className='flex flex-row gap-1 text-[14px] cursor-pointer w-full'
            htmlFor={item?.id}
          >
            {item?.title}
          </label>
        </div>
      ))}
    </div>
  );
}

export default BathRoomRadio;
