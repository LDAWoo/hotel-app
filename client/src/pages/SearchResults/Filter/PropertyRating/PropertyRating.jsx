import FilterCard from "../FilterCard";
import PropertyItem from "./PropertyItem";

function PropertyRating() {
  return (
    <>
      <FilterCard
        title='Property rating'
        subTitle='Includes stars and other ratings'
        item={[<PropertyItem key={1} />]}
      />
    </>
  );
}

export default PropertyRating;
