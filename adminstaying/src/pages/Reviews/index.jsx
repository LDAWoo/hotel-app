import Title from "../../components/Title/Title";
import FilterReviews from "./FilterReviews";

function Reviews() {
  return (
    <div>
      <div className="mt-0 mb-0 ml-auto mr-auto max-w-[var(--max-width)] p-4 relative">
        <div className="mb-4">
          <Title title="Reviews" fontBold extraLarge5 />
        </div>
        <FilterReviews />
      </div>
    </div>
  );
}

export default Reviews;
