import AccommodationType from "./AccommodationType/AccommodationType";
import Col from "./Col";
import Person from "./Person";
import SelectAmount from "./SelectAmount";
import Price from "./Price";

const Body = () => {
  const data = [
    { id: 1, name: "" },
    { id: 2, name: "" },
  ];

  return (
    <tbody className='border-b border-hotel-500 dark:border-primary-600'>
      <tr className='h-auto table-row border-collapse border-b border-hotel-500 dark:border-primary-600'>
        <Col className='w-[30%]' render={<AccommodationType />} />
        <Col className='w-[10%]' render={<Person data={data} />} />
        <Col className='' render={<Price />} />
        <Col />
        <Col className='w-[10%]' render={<SelectAmount />} />
      </tr>
    </tbody>
  );
};

export default Body;
