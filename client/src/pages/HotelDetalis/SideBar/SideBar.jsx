import { memo } from "react";
import Search from "./Search/Search";

function SideBar() {
  return (
    <div className='min-w-[200px] max-w[300px]'>
      <div className='w-full'>
        <div className='w-full'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default memo(SideBar);
