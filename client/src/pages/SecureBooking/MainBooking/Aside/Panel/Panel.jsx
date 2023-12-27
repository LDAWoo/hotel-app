function Panel({ children }) {
  return (
    <div className='relative w-full p-4 bg-white dark:bg-primary-700 border dark:border-primary-500  rounded-md'>
      {children}
    </div>
  );
}

export default Panel;
