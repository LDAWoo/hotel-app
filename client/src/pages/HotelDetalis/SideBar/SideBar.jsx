import { memo } from "react";
import Search from "../Search";

function SideBar() {
  return (
    <div className='w-[250px]'>
      <div className='w-full bg-secondary-50/80 dark:bg-secondary-100/50 p-4 dark:text-white'>
        <Search />
      </div>
    </div>
  );
}

export default memo(SideBar);
