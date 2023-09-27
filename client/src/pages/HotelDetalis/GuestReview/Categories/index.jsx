import Title from "../../../../components/Title/Title";
import Item from "./Item";

const Categories = () => {
  return (
    <div className='flex flex-col gap-5 dark:text-white'>
      <Title title='Categories:' fontBold xl />
      <div className='grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 gap-5 dark:text-white'>
        <Item title='Staff' rating={4.8} />
        <Item title='Facilities' rating={4.5} />
        <Item title='Cleanliness' rating={4.7} />
        <Item title='Comfort' rating={4.9} />
        <Item title='Value for money' rating={4.2} />
        <Item title='Location' rating={4.5} />
      </div>
    </div>
  );
};

export default Categories;
