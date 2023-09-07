import FilterCard from "../FilterCard";
import FacilitiesItems from "./FacilitiesItem";

function Facilities() {
  return (
    <>
      <FilterCard title='Facilities' item={[<FacilitiesItems key={1} />]} />
    </>
  );
}

export default Facilities;
