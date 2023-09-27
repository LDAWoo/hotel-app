import Title from "../../../../../../components/Title/Title";

const SummaryRoomAndPrice = () => {
  return (
    <div className='flex flex-col gap-1 dark:text-primary-700'>
      {/* Rooms */}
      <Title title='1 room for night' large />
      {/* Price */}
      <Title title='VND 19,404,355' fontMedium xxl />
    </div>
  );
};

export default SummaryRoomAndPrice;
