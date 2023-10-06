import Title from "../../../components/Title/Title";

function ItemWordMap({ title, subTitle }) {
  return (
    <div className='flex flex-col w-full max-w-[320px] mt-[32px] mr-[32px]'>
      <Title
        title={title}
        fontBold
        titleCustom='text-[32px] md:text-[48px]'
        colorTitle='dark:text-white'
      />
      <Title
        title={subTitle}
        nowrap={false}
        xl
        colorTitle='dark:text-primary-50'
      />
    </div>
  );
}

export default ItemWordMap;
