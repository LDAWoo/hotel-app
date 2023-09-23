const tickets = [
  {
    id: 1,
    name: "It only takes 2 minutes",
  },
  {
    id: 2,
    name: "Confirmation is immediate",
  },
  {
    id: 3,
    name: "No booking or credit card fees!",
  },
];

const Ticket = () => {
  return (
    <div>
      <ul className='block list-disc ml-3'>
        {tickets.map((item, index) => (
          <li key={index} className='list-item text-[12px] mb-[2px]'>
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ticket;
