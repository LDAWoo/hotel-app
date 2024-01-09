import DateReviews from "./DateReviews";
import PropertiesReviews from "./PropertiesReviews";
import SearchReviews from "./SearchReviews";
import ShowReviews from "./ShowReviews";

function FilterReviews() {
  return (
    <div className="flex items-start 2md:items-center flex-col 2md:flex-row gap-4">
      <div className="flex items-start 2md:items-center flex-col 2md:flex-row flex-1 gap-4 w-full">
        <DateReviews />
        <PropertiesReviews />
        <ShowReviews />
      </div>
      <SearchReviews />
    </div>
  );
}

export default FilterReviews;
