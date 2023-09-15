import Card from "../../Home/OurHotel/Card";

function ItemResults({ data }) {
  return (
    <div className='w-full h-full relative'>
      <div className='flex flex-col w-full h-full relative'>
        <div className='mb-2'>
          <span className='dark:text-white font-medium text-[20px]'>
            Ho Chi Minh City: 584 properties found
          </span>
        </div>
        {data ? (
          <div className='grid gap-x-3 gap-y-3 auto-cols-auto grid-cols-1 sm:grid-cols-2 w-full'>
            {data?.map((card, index) => (
              <Card
                key={card?.id}
                title={card?.name}
                price={card?.price}
                starCount={card?.star}
                isWishlist={card?.isWishlist}
                images={card.images}
              />
            ))}
          </div>
        ) : (
          <div>Not Result</div>
        )}
      </div>
    </div>
  );
}

export default ItemResults;
