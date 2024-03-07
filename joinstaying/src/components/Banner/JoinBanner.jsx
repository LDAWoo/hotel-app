import { useEffect, useState } from "react";
import Title from "../Title/Title";
import "./JoinBanner.scss";
import GetStarted from "../GetStarted/GetStarted";
import { useTranslation } from "react-i18next";
function JoinBanner() {
  const { t } = useTranslation();
  const data = [
    {
      title: t("JoinBanner.data.title1"),
    },
    {
      title: t("JoinBanner.data.title2"),
    },
    {
      title: t("JoinBanner.data.title3"),
    },
    {
      title: t("JoinBanner.data.title4"),
    },
    {
      title: t("JoinBanner.data.title5"),
    },
  ];

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
                <div>
                  {t("JoinBanner.listYour")}
                  <div className="overflow-hidden relative">
                    <div className="bannerItem text-hotel-50">
                      <p>{data[showListYourIndex].title}</p>
                    </div>
                  </div>
                  {t("JoinBanner.onStaying")}
                </div>
                <Title nowrap={false} fontMedium extraLarge4 title={t("JoinBanner.title")} />
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
