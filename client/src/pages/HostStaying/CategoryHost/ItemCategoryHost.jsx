import Image from "../../../components/Image/Image";
import Title from "../../../components/Title/Title";
import Button from "../../../components/Buttons/Button";

const ItemCategoryHost = ({ className, name, img, description, onClick }) => {
  return (
    <div
      className={`w-full border rounded-md p-4 bg-white aspect-auto md:aspect-[50/40] 2md:aspect-[50/50] ${className}`}
    >
      <div className='flex flex-col gap-2 w-full h-full items-center text-center'>
        <div className='flex flex-col flex-1 gap-2 items-center'>
          {img && (
            <div className='w-[50px] h-[50px]'>
              <Image src={img} className='w-full h-full object-cover' />
            </div>
          )}
          <Title title={name} fontBold extraLarge4 />
          <Title title={description} nowrap={false} xl />
        </div>

        <Button
          title='List your property'
          background
          className='pt-2 pb-2'
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default ItemCategoryHost;
