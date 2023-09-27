import Col from "../Col/Col";
const Head = () => {
  return (
    <thead className='table-header-group w-full sticky -top-[1px] z-[20] h-full bg-white'>
      <tr className='table-row border-collapse border-hotel-100 dark:border-primary-500 w-full'>
        <Col
          className='w-[35%] text-left bg-hotel-75'
          title='Accommodation Type'
        />
        <Col className='w-[5%] bg-hotel-75' title='Sleeps' />
        <Col className='w-[20%] bg-hotel-600' title='Price for a week' arrow />
        <Col className='w-[35%] bg-hotel-75' title='Your choices' />
        <Col
          className='w-[5%] bg-hotel-75'
          title='Select amount'
          nowrap={false}
        />
      </tr>
    </thead>
  );
};

export default Head;
