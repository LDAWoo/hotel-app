import { memo } from "react";
import Search from "../Search";

function SideBar() {
  return (
    <div className='min-w-[250px] w-full'>
      <div className='w-full bg-secondary-50/80 dark:bg-secondary-100/50 p-4 dark:text-white'>
        <Search />
      </div>
    </div>
  );
}

export default memo(SideBar);
