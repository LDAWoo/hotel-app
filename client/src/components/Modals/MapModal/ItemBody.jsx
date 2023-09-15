import Card from "../../../pages/Home/OurHotel/Card";
import { ourHotels } from "../../Constants/OurHotel";

function ItemBody() {
  return (
    <div className=''>
      <div className='pt-2 flex flex-col h-full'>
        <div>Button</div>
        <div className='grid grid-cols-1 gap-y-8'>
          {ourHotels.map((card, index) => (
            <Card
              key={index}
              to={card?.to}
              images={card?.images}
              isWishlist={card?.isWishlist}
              description={card?.description}
              starCount={card?.star}
              title={card?.name}
              price={card?.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemBody;
