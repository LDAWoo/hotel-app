import Title from "../../../components/Title/Title";
import Star from "../../../components/Star/Start";

function GuestReview() {
  return (
    <section className='mt-5'>
      <div className='flex flex-row gap-2 items-center'>
        <Star starCount={5.5} size={24} startCustom='sm:text-[20px]' />
        <Title title='150 reviews' fontBold xxxl />
      </div>
    </section>
  );
}

export default GuestReview;
