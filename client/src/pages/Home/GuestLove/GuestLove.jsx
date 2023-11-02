import CarouselCustom from "../../../components/Carousel/CarouselCustom";
import { GuestLoveData } from "../../../components/Constants/GuestLoveData";
import HomeTitle from "../HomeTitle";
import ItemGuestLove from "./ItemGuestLove";

function GuestLove() {
  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <HomeTitle title='Homes guests love' />
        </div>

        <div>
          <div>
            <CarouselCustom
              size={4}
              data={GuestLoveData.map((item, index) => (
                <ItemGuestLove
                  key={index}
                  name={item?.name}
                  image={item?.image}
                  ratings={item?.ratings}
                  reviews={item?.reviews}
                  price={item?.price}
                />
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestLove;
