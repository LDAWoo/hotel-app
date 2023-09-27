import Title from "../../../components/Title/Title";
import Star from "../../../components/Star/Start";
import Categories from "./Categories";
import ListReview from "./ListReview/ListReview";
import ShowAllReview from "./ShowAllReview";
import ReviewModal from "../../../components/Modals/ReviewModal/ReviewModal";
function GuestReview() {
  return (
    <section className='flex flex-col w-full mt-5'>
      <div className='flex flex-row gap-2 items-center dark:text-white'>
        <Star starCount={5.5} size={20} xl />
        <Title title='150 reviews' fontMedium xl />
      </div>
      <Categories />
      <ListReview />
      <ShowAllReview />

      <ReviewModal
        body={
          <div className='flex flex-col'>
            <div className='flex flex-row gap-2 items-center dark:text-white'>
              <Star starCount={5.5} size={20} xl />
              <Title title='150 reviews' fontMedium xl />
            </div>
            <Categories />
            <ListReview />
            <ListReview />
            <ListReview />
            <ListReview />
          </div>
        }
      />
    </section>
  );
}

export default GuestReview;
