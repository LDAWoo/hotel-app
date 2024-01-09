import Title from "../../../components/Title/Title";

function ItemWordMap({ title, subTitle }) {
  return (
    <div className="flex flex-col w-full max-w-[320px] mt-[32px] mr-[32px]">
      <Title title={title} fontBold className="dark:text-white text-[32px] md:text-[48px]" />
      <Title title={subTitle} nowrap={false} xl className="dark:text-primary-50" />
    </div>
  );
}

export default ItemWordMap;
