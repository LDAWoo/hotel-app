import InputStaying from "../../../../components/Staying/Input";

function SearchReviews() {
  return (
    <div className="w-full 2md:w-[300px]">
      <InputStaying className="mt-0 2md:mt-7 w-full h-[37px]" placeHolder="Search by score, date, comment,..." />
    </div>
  );
}

export default SearchReviews;
