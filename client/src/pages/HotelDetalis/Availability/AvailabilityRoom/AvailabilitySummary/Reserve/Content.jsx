import Title from "../../../../../../components/Title/Title";

const Content = () => {
  return (
    <div className='w-auto bg-[rgba(0,27,65,0.9)] text-white p-3 max-w-[300px] '>
      <div className='flex flex-col gap-[2px]'>
        <Title
          title='Bon Ami Hotel - Thien Xuan Hotel'
          fontBold
          xxxl
          nowrap={false}
        />
        {/* RoomType */}
        <Title title='Deluxe Double Room with Garden View' fontBold medium />
        <div className='border-t border-white' />
        {/* Time */}
        <Title title='Total lenght of stay: 1 week' medium fontBold />
        {/* Check in */}
        <Title title='Check-in: Saturday 23 September 2023' medium />
        {/* Check out */}
        <Title title='Check-out: Saturday 30 September 2023' medium />
        {/* Message */}
        <div className='bg-[#febb02] text-primary-700 text-[12px] pt-[2px] pb-[2px] pr-[6px] pl-[6px] rounded-sm'>
          Great choice! Just 2 minutes to finish your booking
        </div>
      </div>
    </div>
  );
};

export default Content;
