import { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

function Page({ wide, children, title }) {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  const handleOpen = () => {
    setVisible(true);
  };

  return (
    <>
      <div className="pt-[96px] pr-0 pb-0 pl-0 sm:pl-[60px] md:overflow-hidden lg:pl-[96px] xl:pt-[80px] xl:pr-0 xl:pb-0 xl:pl-[300px]">
        <Sidebar className={`transition-transform ${visible ? "translate-x-0 " : "-translate-x-[100%] sm:translate-x-0"}`} onClose={handleClose} />
        <Header onOpen={handleOpen} />
        <div className="flex flex-col min-h-[calc(100vh_-_96px)] p-[24px] sm:p-[32px] xl:p-[40px] bg-secondary-n dark:bg-secondary-n8">
          <div className="flex flex-col flex-1 w-full max-w-full xl:max-w-[1200px] mt-0 mb-0 ml-auto mr-auto">
            {title && <div className="font-bold">{title}</div>}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
