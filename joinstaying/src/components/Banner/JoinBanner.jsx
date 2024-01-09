import { useEffect, useState } from "react";
import Title from "../Title/Title";
import "./JoinBanner.scss";
import GetStarted from "../GetStarted/GetStarted";
const data = [
  {
    title: "apartment",
  },
  {
    title: "hotel",
  },
  {
    title: "holiday home",
  },
  {
    title: "guest house",
  },
  {
    title: "bed and breakfast",
  },
];
function JoinBanner() {
  const [showListYourIndex, setShowListYourIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowListYourIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [data]);

  return (
    <div className="relative">
      <div className="relative w-full bg-hotel-600 ">
        <div className="w-full m-auto bg-hotel-600 lg:max-w-[var(--max-width)] mb-10 p-[10px]">
          <div className="flex w-full text-white h-auto mb-2 my-auto">
            <div className="flex w-full flex-col items-center 2md:flex-row 2md:items-start 2md:justify-start pt-8 gap-5">
              <div className="flex flex-col text-center items-center 2md:text-start 2md:items-start w-full font-bold text-[24px] md:text-[32px] 2md:text-[48px]">
                <div className={``}>
                  List your
                  <div className="overflow-hidden relative">
                    <div className="bannerItem text-hotel-50">
                      <p>{data[showListYourIndex].title}</p>
                    </div>
                  </div>
                  on Staying.com
                </div>

                <div className={`block opacity-100 duration-300 ${"hidden opacity-0"}`}>
                  List
                  <div className="text-hotel-50">anything</div>
                  on Staying.com
                </div>
                <Title nowrap={false} fontMedium extraLarge4 title="Whether hosting is your side passion or full-time job, register your holiday rental on Staying.com to reach travellers worldwide" />
              </div>
              <GetStarted />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinBanner;
