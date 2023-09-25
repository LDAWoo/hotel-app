const SelectAmount = () => {
  return (
    <div>
      <select className='border border-primary-700 rounded-[3px] w-full'>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
    </div>
  );
};

export default SelectAmount;
