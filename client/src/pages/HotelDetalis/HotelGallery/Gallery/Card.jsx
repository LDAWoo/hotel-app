import PropsTypes from "prop-types";
import Image from "../../../../components/Image/Image";

function Card({ item }) {
  return (
    <div>
      <div className='aspect-[2/1.5]'>
        <Image src={item?.urlImage} className='w-full h-full object-cover' />
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropsTypes.object,
};
export default Card;
