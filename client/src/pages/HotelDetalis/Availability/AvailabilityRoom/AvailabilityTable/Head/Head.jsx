import Col from "../Col/Col";
const Head = () => {
  return (
    <thead className='table-header-group w-full sticky top-0 z-[20] bg-white'>
      <tr className='table-row border-collapse border-hotel-100 w-full'>
        <Col
          className='w-[35%] text-left bg-[#4c76b2]'
          title='Accommodation Type'
        />
        <Col className='w-[5%] bg-[#4c76b2]' title='Sleeps' />
        <Col className='w-[20%] bg-[#003580]' title='Price for a week' arrow />
        <Col className='w-[35%] bg-[#4c76b2]' title='Your choices' />
        <Col
          className='w-[5%] bg-[#4c76b2]'
          title='Select amount'
          nowrap={false}
        />
      </tr>
    </thead>
  );
};

export default Head;
