function Header({ items }) {
  return (
    <ul className="absolute top-[5px] ml-[15px] text-[11px] list-none p-0 mt-0 mr-0 mb-[15px] flex flex-row gap-2">
      {items.map((item, index) => (
        <li key={index} className="flex flex-row items-center gap-1">
          <span className={`${item.color} h-[10px] w-[10px]`}></span>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Header;
