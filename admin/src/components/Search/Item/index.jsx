function Item({ item }) {
  return (
    <div className="flex items-center p-[12px] cursor-pointer">
      <div className="flex items-center flex-1 text-secondary-n7 hover:text-primary-p1">
        <div className="flex-shrink-0 w-[48px] h-[48px] mr-[16px] rounded-lg overflow-hidden">
          <img srcSet={`${item?.image2x} 2x`} src={item?.image} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="mb-[4px] text-secondary-n4 hover:text-text-secondary-n4">{item?.content}</div>
          <div className="transition-all">{item?.title}</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
