const SelectAmount = () => {
  return (
    <div>
      <select className='border border-primary-500 dark:text-primary-50 focus:outline-none focus:border-primary-400 bg-transparent rounded-[3px] w-full'>
        <option value={0} className='bg-transparent outline-none'>
          0
        </option>
        <option value={1}>1 (VND 11,827,871)</option>
        <option value={2}>2 (VND 11,827,871)</option>
        <option value={3}>3 (VND 11,827,871)</option>
        <option value={4}>4 (VND 11,827,871)</option>
      </select>
    </div>
  );
};

export default SelectAmount;
