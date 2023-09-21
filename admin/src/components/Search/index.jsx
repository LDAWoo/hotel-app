import { useState } from "react";
import Button from "./Button";
import Icon from "../Icon";
import Body from "./Body";
function Search({ className }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="sm:relative flex-shrink-0 sm:w-[360px] absolute right-0 top-[80px] sm:top-0 left-0 w-full p-[12px_16px] sm:bg-secondary-n sm:shadow-[0_8px_12px_rgba(17,19,21,0.5)] dark:bg-secondary-n8">
      <div className={`sm:opacity-100 transition-all ${visible ? "visible opacity-100" : ""}`}>
        <div className="relative z-[2]">
          <Button className={`${visible ? "invisible opacity-0" : "visible opacity-100"} left-[12px] text-secondary-n4 hover:text-secondary-n7`}>
            <Icon name="search" size="24" />
          </Button>
          <Button className={`${visible ? "visible opacity-100" : "invisible opacity-0"} left-[10px] text-primary-p1 hover:-translate-x-[2px] hover:-translate-y-[50%]`}>
            <Icon name="arrow-left" size="24" />
          </Button>
          <input className="w-full h-[48px] p-[0_68px_0_42px] bg-secondary-n2 rounded-xl text-secondary-n7 transition-all dark:bg-secondary-n6 dark:text-secondary-n1 placeholder:text-shades-s1 focus:border-primary-p1 focus:bg-secondary-n dark:focus:bg-secondary-n8" type="text" placeholder="Search or type a command" onChange={() => setVisible(true)} />
          <Button className={`${visible ? "invisible opacity-0" : "visible opacity-100"} right-[8px] w-[56px] h-[32px] bg-secondary-n`}>⌘ F</Button>
          <Button className={`${visible ? "visible opacity-100" : "invisible opacity-0"} right-[10px] w-[32px] h-[32px] text-shades-s1 hover:text-primary-p3`} onClick={() => setVisible(false)}>
            <Icon name="close-circle" size="24" />
          </Button>
        </div>
        {/* body */}
        {/* <Body /> */}
      </div>
    </div>
  );
}

export default Search;
