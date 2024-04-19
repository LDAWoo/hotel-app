import { memo } from "react";
import Search from "../Search";
import ImageLocation from "./ImageLocation/ImageLocation";

function SideBar() {
  return (
    <div className='min-w-[250px] w-full flex flex-col gap-4'>
      <div className='w-full bg-secondary-50/80 dark:bg-secondary-100/50 p-4 dark:text-white'>
        <Search />
      </div>
      <div className="w-full">
        <ImageLocation/>
      </div>
    </div>
  );
}

export default memo(SideBar);
