import Title from "../../../components/Title/Title";

function HotelPropertyItems({ icon, title }) {
  const IconComponent = icon;

  return (
    <li className='flex max-w-full border-[0.120rem] text-primary-500 dark:text-white rounded-sm dark:border-primary-500 border-gray-200 flex-grow flex-shrink basis-auto flex-row items-center justify-start text-center min-w-[12px] p-[12px]'>
      {icon && <IconComponent size={28} />}
      {title && (
        <div className='ml-2 mr-2 whitespace-nowrap'>
          <Title small title={title} />
        </div>
      )}
    </li>
  );
}

export default HotelPropertyItems;
